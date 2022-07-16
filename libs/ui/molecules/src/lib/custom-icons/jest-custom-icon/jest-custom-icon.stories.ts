import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { JestCustomIconComponent } from './jest-custom-icon.component';

export default {
  title: 'molecules/custom-icons/jest-custom-icon',
  parameters: {
    jest: 'jest-custom-icon',
  },
  decorators: [
    moduleMetadata({
      imports: [JestCustomIconComponent],
    }),
  ],
} as Meta<JestCustomIconComponent>;

const Template: Story<JestCustomIconComponent> = () => ({
  template: `<rc-jest-custom-icon></rc-jest-custom-icon>`,
});

export const Default = Template.bind({});
