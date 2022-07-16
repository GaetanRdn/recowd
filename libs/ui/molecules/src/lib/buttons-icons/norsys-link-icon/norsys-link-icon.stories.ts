import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NorsysLinkIconComponent } from './norsys-link-icon.component';

export default {
  title: 'molecules/buttons-icons/norsys-link-icon',
  parameters: {
    jest: 'norsys-link-icon',
  },
  decorators: [
    moduleMetadata({
      imports: [NorsysLinkIconComponent],
    }),
  ],
} as Meta<NorsysLinkIconComponent>;

const Template: Story<NorsysLinkIconComponent> = () => ({
  template: `<rc-norsys-link-icon></rc-norsys-link-icon>`,
});

export const Default = Template.bind({});
