import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { WorkInProgressIconComponent } from './work-in-progress-icon.component';

export default {
  title: 'molecules/material-icons/work-in-progress-icon',
  parameters: {
    jest: 'work-in-progress-icon',
  },
  decorators: [
    moduleMetadata({
      imports: [WorkInProgressIconComponent],
    }),
  ],
} as Meta<WorkInProgressIconComponent>;

const Template: Story<WorkInProgressIconComponent> = () => ({
  template: `<rc-work-in-progress-icon></rc-work-in-progress-icon>`,
});

export const Default = Template.bind({});
