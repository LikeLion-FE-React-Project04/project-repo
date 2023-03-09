const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const createBundleAnalyzerPlugin = (options = {}) => {
  const config = Object.assign(
    {
      openAnalyzer: true,
      generateStatsFile: true,
    },
    options
  );
  return new BundleAnalyzerPlugin(config);
};

module.exports = createBundleAnalyzerPlugin;