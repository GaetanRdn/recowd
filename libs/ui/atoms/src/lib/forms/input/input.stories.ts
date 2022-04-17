import { Args, Meta, moduleMetadata, Story } from '@storybook/angular';
import { InputDirective, InputModule } from './input.directive';
import { action } from '@storybook/addon-actions';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'atoms/forms/input',
  component: InputDirective,
  parameters: {
    badges: [BADGE.STABLE],
    jest: 'input.directive',
  },
  decorators: [
    moduleMetadata({
      imports: [InputModule, ReactiveFormsModule, FormsModule],
    }),
  ],
  argTypes: {
    outlined: { control: false },
    valueChange: { action: 'valueChanged' },
  },
} as Meta<InputDirective>;

const template: Story = (args: Args) => ({
  props: {
    outlined: args['outlined'] ?? false,
    disabled: args['disabled'] ?? false,
    valueChange: action('log'),
  },
  template: `
  <input rcInput placeholder="Type something" [outlined]="outlined"
         [disabled]="disabled" (valueChange)="valueChange($event)"/>`,
});

export const Default = template.bind({});
Default.args = {
  disabled: false,
};

export const Outlined = template.bind({});
Outlined.args = {
  ...Default.args,
  outlined: true,
};

const templateForTemplateDriven: Story = (args: Args) => ({
  props: {
    valueChange: action('log'),
    inputValue: '',
    outlined: args['outlined'],
    disabled: args['disabled'],
  },
  template: `
  <p style="color: white; font-size: 16px;">inputValue: {{ inputValue }}</p>
  <input rcInput placeholder="Type something" [(ngModel)]="inputValue" (valueChange)="valueChange($event)"
  [disabled]="disabled" [outlined]="outlined"/>`,
});

export const TemplateDriven = templateForTemplateDriven.bind({});
TemplateDriven.args = {
  outlined: false,
  disabled: false,
};

const templateForReactiveForms: Story = (args: Args) => ({
  props: {
    valueChange: action('log'),
    fc: new FormControl({
      value: args['initialValue'],
      disabled: args['disabledControl'],
    }),
    outlined: args['outlined'],
  },
  template: `
  <p style="color: white; font-size: 16px;">inputValue: {{ fc.value }}</p>
  <input rcInput placeholder="Type something" [formControl]="fc" (valueChange)="valueChange($event)"
  [outlined]="outlined"/>`,
});

export const ReactiveForms = templateForReactiveForms.bind({});
ReactiveForms.args = {
  disabledControl: false,
  initialValue: '',
  outlined: false,
};
