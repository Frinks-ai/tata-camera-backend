import fs from 'fs';
import express from 'express';
import { createServer } from 'http';
import { execSync } from 'child_process';
import axios from 'axios';

import middlewaresConfig from './config/middleware';
import constants from './config/constants';

const app = express();
const httpServer = createServer(app);

middlewaresConfig(app);

app.get('/image', async (req, res) => {
  try {
    // execute query on camera_backend
    execSync(
      `v4l2-ctl -d /dev/video${constants.CAMERA_INDEX} -c exposure_absolute=${constants.EXPOSURE}`
    );
    execSync(
      `ffmpeg -y -f video4linux2 -video_size 2592x1944 -loglevel error -i /dev/video${constants.CAMERA_INDEX} -filter:v "scale=2592:-1:flags=lanczos,unsharp=5:5:1.0:5:5:0.0" -q:v 2 -vframes 1 -update 1 ${constants.BASE_PATH}/images/upload.bmp`
    );
    const filepath = `${constants.BASE_PATH}/images/upload.bmp`;
    const image = fs.readFileSync(filepath, 'base64');
    const base64Data = image.replace(/^data:image\/png;base64,/, '');
    // upload the image to python backend
    const uploadRes = await axios({
      method: 'post',
      url: `${constants.PYTHON_BACKEND}/image`,
      data: {
        image: base64Data
      },
      maxContentLength: Infinity,
      maxBodyLength: Infinity
    });
    if (uploadRes.data.success) {
      res.status(200).json({
        success: true,
        status: 'Uploaded',
        data: {
          name: 'upload.bmp'
        }
      });
    } else {
      res.status(400).json({
        success: false,
        status: 'File upload unsuccessful'
      });
    }
  } catch (err) {
    console.log('image --- get --- error', err.message);
    res.status(400).json({
      success: false,
      status: 'File upload error please retry'
    });
  }
});

app.get('/images', (req, res) => {
  try {
    const filepath = `${constants.BASE_PATH}/images/${req.query.params}`;
    return res.sendFile(filepath);
  } catch (err) {
    console.log('images --- get --- error', err);
    return res.send('Error occured');
  }
});

if (!module.parent) {
  httpServer.listen(constants.PORT, err => {
    if (err) {
      console.log('Cannot run!');
    } else {
      console.log(`API server listening on port: ${constants.PORT}`);
    }
  });
}

export default app;
