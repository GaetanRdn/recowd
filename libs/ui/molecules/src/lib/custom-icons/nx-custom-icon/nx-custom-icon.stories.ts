import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NxCustomIconComponent } from './nx-custom-icon.component';

export default {
  title: 'molecules/custom-icons/nx-custom-icon',
  parameters: {
    jest: 'nx-custom-icon',
  },
  decorators: [
    moduleMetadata({
      imports: [NxCustomIconComponent],
    }),
  ],
} as Meta<NxCustomIconComponent>;

const Template: Story<NxCustomIconComponent> = () => ({
  template: `<rc-nx-custom-icon></rc-nx-custom-icon>`,
});

export const Default = Template.bind({});
