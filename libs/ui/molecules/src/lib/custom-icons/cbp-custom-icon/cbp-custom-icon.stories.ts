import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CbpCustomIconComponent } from './cbp-custom-icon.component';

export default {
  title: 'molecules/custom-icons/cbp-custom-icon',
  parameters: {
    jest: 'cbp-custom-icon',
  },
  decorators: [
    moduleMetadata({
      imports: [CbpCustomIconComponent],
    }),
  ],
} as Meta<CbpCustomIconComponent>;

const Template: Story<CbpCustomIconComponent> = () => ({
  template: `<rc-cbp-custom-icon></rc-cbp-custom-icon>`,
});

export const Default = Template.bind({});
