import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NorsysCustomIconComponent } from './norsys-custom-icon.component';

export default {
  title: 'molecules/custom-icons/norsys-custom-icon',
  parameters: {
    jest: 'norsys-custom-icon',
  },
  decorators: [
    moduleMetadata({
      imports: [NorsysCustomIconComponent],
    }),
  ],
} as Meta<NorsysCustomIconComponent>;

const Template: Story<NorsysCustomIconComponent> = () => ({
  template: `<rc-norsys-custom-icon></rc-norsys-custom-icon>`,
});

export const Default = Template.bind({});
