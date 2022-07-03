import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { EducationButtonWithIconComponent } from './education-button-with-icon.component';

export default {
  title: 'molecules/buttons-with-icons/education-button-with-icon',
  decorators: [
    moduleMetadata({
      imports: [EducationButtonWithIconComponent],
    }),
  ],
} as Meta<EducationButtonWithIconComponent>;

const Template: Story<EducationButtonWithIconComponent> = () => ({
  template: `<rc-education-button-with-icon></rc-education-button-with-icon>`,
});

export const Default = Template.bind({});
