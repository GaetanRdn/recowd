import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AngularCustomIconComponent } from './angular-custom-icon.component';

export default {
  title: 'molecules/custom-icons/angular-custom-icon',
  parameters: {
    jest: 'angular-custom-icon',
  },
  decorators: [
    moduleMetadata({
      imports: [AngularCustomIconComponent],
    }),
  ],
} as Meta<AngularCustomIconComponent>;

const Template: Story<AngularCustomIconComponent> = () => ({
  template: `<rc-angular-custom-icon></rc-angular-custom-icon>`,
});

export const Default = Template.bind({});
