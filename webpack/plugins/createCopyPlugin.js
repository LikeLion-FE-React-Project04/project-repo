const CopyPlugin = require('copy-webpack-plugin');

const createCopyPlugin = (options = {}) => {
  const config = Object.assign(
    {
      patterns: [{ from: 'public/assets', to: 'assets' }],
    },
    options
  );

  return new CopyPlugin(config);
};

module.exports = createCopyPlugin;
