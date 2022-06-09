import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { RateComponent } from './rate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';

export default {
  title: 'atoms/forms/rate',
  parameters: {
    badges: [BADGE.STABLE],
    jest: 'rate',
  },
  decorators: [
    moduleMetadata({
      imports: [RateComponent, BrowserAnimationsModule],
    }),
  ],
} as Meta<RateComponent>;

const template: Story<RateComponent> = (args: RateComponent) => ({
  props: {
    nbStars: args['nbStars'],
    value: args['value'],
    disabled: args['disabled'],
    valueChange: action('valueChange'),
  },
  template: `<rc-rate [nbStars]="nbStars" [value]="value" [disabled]="disabled" (valueChange)="valueChange($event)"></rc-rate>`,
});

export const Default = template.bind({});
Default.args = {
  nbStars: 1,
  value: 0,
  disabled: false,
};
