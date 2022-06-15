import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { LabelComponent, LabelModule } from './label.component';

export default {
  title: 'atoms/forms/label',
  component: LabelComponent,
  parameters: {
    badges: [BADGE.STABLE],
    jest: 'label.component',
  },
  decorators: [
    moduleMetadata({
      imports: [LabelModule],
    }),
  ],
} as Meta<LabelComponent>;

const template: Story<LabelComponent> = () => ({
  template: `<rc-label>A label</rc-label>`,
});

export const Default = template.bind({});
