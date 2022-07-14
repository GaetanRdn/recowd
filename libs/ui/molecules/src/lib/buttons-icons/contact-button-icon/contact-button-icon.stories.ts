import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ContactButtonIconComponent } from './contact-button-icon.component';

export default {
  title: 'molecules/buttons-icons/contact-button-icon',
  decorators: [
    moduleMetadata({
      imports: [ContactButtonIconComponent],
    }),
  ],
} as Meta<ContactButtonIconComponent>;

const Template: Story<ContactButtonIconComponent> = () => ({
  template: `<rc-contact-button-icon></rc-contact-button-icon>`,
});

export const Default = Template.bind({});
