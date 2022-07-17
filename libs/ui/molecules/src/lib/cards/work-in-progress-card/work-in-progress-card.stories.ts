import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { WorkInProgressCardComponent } from './work-in-progress-card.component';

export default {
  title: 'molecules/cards/work-in-progress-card',
  parameters: {
    jest: 'work-in-progress-card',
  },
  decorators: [
    moduleMetadata({
      imports: [WorkInProgressCardComponent],
    }),
  ],
} as Meta<WorkInProgressCardComponent>;

const Template: Story<WorkInProgressCardComponent> = () => ({
  template: `<rc-work-in-progress-card></rc-work-in-progress-card>`,
});

export const Default = Template.bind({});
