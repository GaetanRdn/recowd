import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { LabelDirective } from './label.directive';

export default {
  title: 'atoms/forms/label',
  parameters: {
    badges: [BADGE.STABLE],
    jest: 'label.component',
  },
  decorators: [
    moduleMetadata({
      imports: [LabelDirective],
    }),
  ],
} as Meta<LabelDirective>;

const template: Story<LabelDirective> = () => ({
  template: `<rc-label>A label</rc-label>`,
});

export const Default = template.bind({});
