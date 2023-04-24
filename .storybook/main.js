import commonConfig from '../webpack/common';

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
  staticDirs: ['../src'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    const customConfig = {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          ...commonConfig.resolve.alias,
        },
      },
      module: {
        ...config.module,
        rules: [...config.module.rules, ...commonConfig.module.rules],
      },
    };

    return customConfig;
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
