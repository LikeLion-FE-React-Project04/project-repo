const DotEnv = require('dotenv-webpack');
const { resolve } = require('node:path');

const createDotEnvPlugin = (options = {}) => {
  const config = Object.assign(
    {
      path: resolve(__dirname,'../../.env')
    },
    options
  );
  console.log(new DotEnv(config));
  return new DotEnv(config);
};

module.exports = createDotEnvPlugin;
