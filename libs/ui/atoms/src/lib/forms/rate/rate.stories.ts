import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { RateComponent, RateModule } from './rate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'atoms/forms/rate',
  component: RateComponent,
  parameters: {
    badges: [BADGE.STABLE],
    jest: 'rate.component',
  },
  decorators: [
    moduleMetadata({
      imports: [RateModule, BrowserAnimationsModule],
    }),
  ],
} as Meta<RateComponent>;

const template: Story<RateComponent> = (args: RateComponent) => ({
  props: {
    nbStars: args['nbStars'],
    value: args['value'],
    disabled: args['disabled'],
  },
});

export const Default = template.bind({});
Default.args = {
  nbStars: 1,
  value: 0,
  disabled: false,
};
