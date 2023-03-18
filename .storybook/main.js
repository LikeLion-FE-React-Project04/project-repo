import commonConfig from '../webpack/common';

console.log(commonConfig.module.rules);

const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // '@storybook/preset-scss',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: { implementation: require('postcss') },
      },
    },
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    // console.log(config);
    return {
      ...config,
      // resolve: {
      //   ...config.resolve,
      //   // ...commonConfig.resolve,
      // },
      module: {
        ...config.module,
        rules: [...config.module.rules, ...commonConfig.module.rules],
      },
    };
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
