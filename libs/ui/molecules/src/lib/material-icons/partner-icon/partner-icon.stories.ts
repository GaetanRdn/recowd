import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PartnerIconComponent } from './partner-icon.component';

export default {
  title: 'molecules/material-icons/partner-icon',
  parameters: {
    jest: 'partner-icon',
  },
  decorators: [
    moduleMetadata({
      imports: [PartnerIconComponent],
    }),
  ],
} as Meta<PartnerIconComponent>;

const Template: Story<PartnerIconComponent> = () => ({
  template: `<rc-partner-icon></rc-partner-icon>`,
});

export const Default = Template.bind({});
