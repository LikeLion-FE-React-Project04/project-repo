const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const createCssMinimizerPlugin = (options = {}) => {
  const config = Object.assign(
    {
      minimizerOptions: {
        preset: [
          'default',
          {
            discardComments: { removeAll: true },
          },
        ],
      },
    },
    options
  );
  return new CssMinimizerPlugin(config);
};

module.exports = createCssMinimizerPlugin;