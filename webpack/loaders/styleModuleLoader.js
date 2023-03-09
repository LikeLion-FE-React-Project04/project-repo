const { env } = require('node:process');
const { cssExtractLoader } = require('../plugins/createCssExtractPlugin');

let isDev = env.NODE_ENV.includes('development');

const styleModuleLoader = {
  test: /\.module\.s?[ac]css$/i,
  use: [
    isDev ? 'style-loader' : cssExtractLoader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        importLoaders: 2,
        modules: {
          localIdentName: '[folder]_[local]__[hash:base64:5]',
        },
      },
    },
    'postcss-loader',
    // 'sass-loader',
  ],
  include: /\.module\.s?[ac]css$/i,
};

module.exports = styleModuleLoader;
