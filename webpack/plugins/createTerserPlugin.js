const TerserPlugin =require('terser-webpack-plugin') 

const createTerserPlugin = (options = {}) => {
  const config = Object.assign({}, options);
  return new TerserPlugin(config);
};

module.exports = createTerserPlugin;
