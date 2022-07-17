import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PartnersButtonWithIconComponent } from './partners-button-with-icon.component';
import { TranslateModule } from '@ngx-translate/core';

export default {
  title: 'molecules/buttons-with-icons/partners-button-with-icon',
  decorators: [
    moduleMetadata({
      imports: [PartnersButtonWithIconComponent, TranslateModule],
    }),
  ],
} as Meta<PartnersButtonWithIconComponent>;

const Template: Story<PartnersButtonWithIconComponent> = () => ({
  template: `<rc-partners-button-with-icon></rc-partners-button-with-icon>`,
});

export const Default = Template.bind({});
