const { resolve } = require('node:path');
const commonConfig = require('./common');
const { merge } = require('webpack-merge');
const serverOptions = require('./server');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

/**
 * @type {import('webpack').Configuration}
 */
const devConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: serverOptions,
  output: {
    path: resolve(__dirname, '../public'),
    filename: '[name].bundle.js',
  },
});

devConfig.plugins.push(new ReactRefreshPlugin())

module.exports = devConfig;
