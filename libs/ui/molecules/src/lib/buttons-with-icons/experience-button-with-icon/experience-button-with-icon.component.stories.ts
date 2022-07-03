import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ExperienceButtonWithIconComponent } from './experience-button-with-icon.component';

export default {
  title: 'molecules/buttons-with-icons/experience-button-with-icon',
  decorators: [
    moduleMetadata({
      imports: [ExperienceButtonWithIconComponent],
    }),
  ],
} as Meta<ExperienceButtonWithIconComponent>;

const Template: Story<ExperienceButtonWithIconComponent> = () => ({
  template: `<rc-experience-button-with-icon></rc-experience-button-with-icon>`,
});

export const Default = Template.bind({});
