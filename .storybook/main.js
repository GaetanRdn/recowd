module.exports = {
  stories: [],
  addons: [
    '@storybook/addon-essentials',
    '@geometricpanda/storybook-addon-badges',
    '@storybook/addon-jest',
    '@storybook/addon-a11y',
  ], // uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs
  //   // Return the altered config
  //   return config;
  // },
  core: {
    builder: 'webpack5',
  },
  staticDirs: ['../src/assets', '../../../libs/ui/molecules/src/lib/assets'],
};
