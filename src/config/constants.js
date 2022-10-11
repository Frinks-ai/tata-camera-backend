require('dotenv').config();

const config = {
  PORT: process.env.PORT || 9001,
  PYTHON_BACKEND: process.env.PYTHON_BACKEND,
  BASE_PATH: process.env.BASE_PATH,
  CAMERA_INDEX: parseInt(process.env.CAMERA_INDEX, 10),
  EXPOSURE: parseInt(process.env.EXPOSURE, 10)
};
export default config;
