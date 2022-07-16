import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookCustomIconComponent } from './storybook-custom-icon.component';

export default {
  title: 'molecules/custom-icons/storybook-custom-icon',
  parameters: {
    jest: 'storybook-custom-icon',
  },
  decorators: [
    moduleMetadata({
      imports: [StorybookCustomIconComponent],
    }),
  ],
} as Meta<StorybookCustomIconComponent>;

const Template: Story<StorybookCustomIconComponent> = () => ({
  template: `<rc-storybook-custom-icon></rc-storybook-custom-icon>`,
});

export const Default = Template.bind({});
