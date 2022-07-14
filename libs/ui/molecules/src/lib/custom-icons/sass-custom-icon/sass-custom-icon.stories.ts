import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SassCustomIconComponent } from './sass-custom-icon.component';

export default {
  title: 'molecules/custom-icons/sass-custom-icon',
  parameters: {
    jest: 'sass-custom-icon',
  },
  decorators: [
    moduleMetadata({
      imports: [SassCustomIconComponent],
    }),
  ],
} as Meta<SassCustomIconComponent>;

const Template: Story<SassCustomIconComponent> = () => ({
  template: `<rc-sass-custom-icon></rc-sass-custom-icon>`,
});

export const Default = Template.bind({});
