import { Args, Meta, moduleMetadata, Story } from '@storybook/angular';
import { InputDirective } from './input.directive';
import { action } from '@storybook/addon-actions';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'atoms/forms/input',
  parameters: {
    badges: [BADGE.STABLE],
    jest: 'input.directive',
  },
  decorators: [
    moduleMetadata({
      imports: [InputDirective, ReactiveFormsModule, FormsModule],
    }),
  ],
  argTypes: {
    valueChange: { action: 'valueChanged' },
  },
} as Meta<InputDirective>;

const template: Story = (args: Args) => ({
  props: {
    disabled: args['disabled'] ?? false,
    valueChange: action('log'),
  },
  template: `
  <input rcInput placeholder="Type something"
         [disabled]="disabled" (valueChange)="valueChange($event)"/>`,
});

export const Default = template.bind({});
Default.args = {
  disabled: false,
};

const templateForTemplateDriven: Story = (args: Args) => ({
  props: {
    valueChange: action('log'),
    inputValue: '',
    disabled: args['disabled'],
  },
  template: `
  <p style="color: white; font-size: 16px;">inputValue: {{ inputValue }}</p>
  <input rcInput placeholder="Type something" [(ngModel)]="inputValue" (valueChange)="valueChange($event)"
  [disabled]="disabled" />`,
});

export const TemplateDriven = templateForTemplateDriven.bind({});
TemplateDriven.args = {
  disabled: false,
};

const templateForReactiveForms: Story = (args: Args) => ({
  props: {
    valueChange: action('log'),
    fc: new UntypedFormControl({
      value: args['initialValue'],
      disabled: args['disabledControl'],
    }),
  },
  template: `
  <p style="color: white; font-size: 16px;">inputValue: {{ fc.value }}</p>
  <input rcInput placeholder="Type something" [formControl]="fc" (valueChange)="valueChange($event)"/>`,
});

export const ReactiveForms = templateForReactiveForms.bind({});
ReactiveForms.args = {
  disabledControl: false,
  initialValue: '',
};
