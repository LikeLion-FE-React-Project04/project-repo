const { EsbuildPlugin } = require('esbuild-loader');

const createESBuildMinifyPlugin = (options = {}) => {
  const config = Object.assign(
    {
      target: 'es2015', // 컴파일 할 구문
      css: true,
    },
    options
  );
  return new EsbuildPlugin(config);
};

module.exports = createESBuildMinifyPlugin;