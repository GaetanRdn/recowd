import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CbpLinkIconComponent } from './cbp-link-icon.component';

export default {
  title: 'molecules/buttons-icons/cbp-link-icon',
  parameters: {
    jest: 'cbp-link-icon',
  },
  decorators: [
    moduleMetadata({
      imports: [CbpLinkIconComponent],
    }),
  ],
} as Meta<CbpLinkIconComponent>;

const Template: Story<CbpLinkIconComponent> = () => ({
  template: `<rc-cbp-link-icon></rc-cbp-link-icon>`,
});

export const Default = Template.bind({});
