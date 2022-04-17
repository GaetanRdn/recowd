module.exports = {
  stories: ['../../../libs/ui/atoms/**/*.stories.ts'],
  addons: [
    '@storybook/addon-essentials',
    '@geometricpanda/storybook-addon-badges',
    '@storybook/addon-jest',
  ],
  // uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
};
