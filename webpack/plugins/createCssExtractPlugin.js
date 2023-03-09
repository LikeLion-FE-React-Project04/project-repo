const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const createCssExtractPlugin = (options = {}) => {
  const config = Object.assign(
    {
      filename: 'static/style.min.css',
    },
    options
  );
  return new MiniCssExtractPlugin(config);
};

const cssExtractLoader = MiniCssExtractPlugin.loader;

const obj = {};

obj.createCssExtractPlugin = createCssExtractPlugin;
obj.cssExtractLoader = cssExtractLoader;

module.exports = obj
