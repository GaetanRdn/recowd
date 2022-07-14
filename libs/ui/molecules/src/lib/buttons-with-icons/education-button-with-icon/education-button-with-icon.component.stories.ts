import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { EducationButtonWithIconComponent } from './education-button-with-icon.component';
import { TranslateModule } from '@ngx-translate/core';

export default {
  title: 'molecules/buttons-with-icons/education-button-with-icon',
  decorators: [
    moduleMetadata({
      imports: [EducationButtonWithIconComponent, TranslateModule],
    }),
  ],
} as Meta<EducationButtonWithIconComponent>;

const Template: Story<EducationButtonWithIconComponent> = () => ({
  template: `<rc-education-button-with-icon></rc-education-button-with-icon>`,
});

export const Default = Template.bind({});
