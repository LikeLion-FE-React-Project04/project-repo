const DotEnv = require('dotenv-webpack');
const { resolve } = require('node:path');

const createDotEnvPlugin = (options = {}) => {
  const config = Object.assign(
    {
      path: resolve(__dirname, '../../.env'),
    },
    options
  );

  return new DotEnv({ config });
};

module.exports = createDotEnvPlugin;
