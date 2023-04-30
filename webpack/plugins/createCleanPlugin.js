const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const createCleanPlugin = (options = {}) => {
  const config = Object.assign(
    {
      verbose: true,
    },
    options
  );

  return new CleanWebpackPlugin(config);
};

module.exports = createCleanPlugin;
