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
    execSync('python3 scripts/camera.py');
    const filepath = `${constants.BASE_PATH}/images/upload.bmp`;
    const image = fs.readFileSync(filepath, 'base64');
    const base64Data = image.replace(/^data:image\/png;base64,/, '');
    // upload the image to python backend
    const uploadRes = await axios.post(`${constants.PYTHON_BACKEND}/image`, {
      image: base64Data
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
        status: 'File upload error please retry'
      });
    }
  } catch (err) {
    console.log('image --- get --- error', err);
    res.status(400).json({
      success: false,
      status: 'File upload error please retry'
    });
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
