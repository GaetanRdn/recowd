import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CypressCustomIconComponent } from './cypress-custom-icon.component';

export default {
  title: 'molecules/custom-icons/cypress-custom-icon',
  parameters: {
    jest: 'cypress-custom-icon',
  },
  decorators: [
    moduleMetadata({
      imports: [CypressCustomIconComponent],
    }),
  ],
} as Meta<CypressCustomIconComponent>;

const Template: Story<CypressCustomIconComponent> = () => ({
  template: `<rc-cypress-custom-icon></rc-cypress-custom-icon>`,
});

export const Default = Template.bind({});
