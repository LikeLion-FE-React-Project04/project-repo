// import createDotEnvPlugin from './plugins/index.js';
const createDotEnvPlugin = require('./plugins/createDotEnvPlugin');
const createHtmlPlugin = require('./plugins/createHtmlPlugin');
const styleLoader = require('./loaders/styleLoader');
const styleModuleLoader = require('./loaders/styleModuleLoader');
const { resolve } = require('node:path');
const { esbuildLoader } = require('./loaders/esbuildLoader');

const commonConfig = {
  target: ['web', 'browserslist'],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.wasm'],
    alias: {
      '@': resolve('src'),
    },
  },
  plugins: [createDotEnvPlugin(), createHtmlPlugin(/* options */)].filter(
    Boolean
  ),
  entry: {
    // main: resolve(__dirname, '../src/index.jsx'),
    main: {
      // eslint-disable-next-line no-undef
      import: resolve(__dirname, '../src/index.jsx'),
      dependOn: ['vendor'],
    },
    vendor: ['react', 'react-dom'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            compilerOptions: {
              noEmit: false,
            },
          },
        },
      },
      {
        // 어떤 파일을 변환할 것인가?
        test: /\.jsx?$/i,
        // 어떤 파일은 제외할 것인가?
        exclude: /node_modules/,
        // 어떤 로더를 사용해 파일을 변환할 것인가?
        use: 'babel-loader',
      },
      // esbuildLoader,
      styleLoader,
      styleModuleLoader,
      {
        test: /\.(jpe?g|png|gif|webp|bmp)$/i,
        type: 'asset/resource',
        // 로더 별, 개별 설정
        generator: {
          filename: 'static/[name].[contenthash][ext][query]',
        },
        parser: {
          dataUrlCondition: 8 * 1024, // 8kb
        },
      },
      {
        test: /\.svg$/i,
        oneOf: [
          {
            dependency: { not: ['url'] },
            use: [
              {
                loader: '@svgr/webpack',
                options: {
                  titleProp: true,
                  svgo: true,
                },
              },
              'new-url-loader',
            ],
          },
          {
            type: 'asset/resource',
            generator: {
              filename: 'static/[name].[contenthash][ext][query]',
            },
            parser: {
              dataUrlCondition: 4 * 1024,
            },
          },
        ],
      },
    ],
  },
};

// export default
module.exports = commonConfig;
