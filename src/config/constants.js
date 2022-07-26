require('dotenv').config();

const config = {
  PORT: process.env.PORT || 9001,
  PYTHON_BACKEND: process.env.PYTHON_BACKEND,
  BASE_PATH: process.env.BASE_PATH
};
export default config;
