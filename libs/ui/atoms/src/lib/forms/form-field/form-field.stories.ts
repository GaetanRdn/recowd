import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { FormFieldComponent, FormFieldModule } from './form-field.component';
import { InputModule } from '../input/input.directive';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

export default {
  title: 'atoms/forms/form-field',
  component: FormFieldComponent,
  parameters: {
    badges: [BADGE.STABLE],
    jest: 'form-field.directive',
  },
  decorators: [
    moduleMetadata({
      imports: [FormFieldModule, InputModule, ReactiveFormsModule],
    }),
  ],
  argTypes: {
    outlined: { control: false },
  },
} as Meta<FormFieldComponent>;

const templateWithInput: Story<FormFieldComponent> = (
  args: FormFieldComponent
) => ({
  props: {
    outlined: args['outlined'],
  },
  template: `
    <rc-form-field [outlined]="outlined">
      <rc-label>Field label</rc-label>
      <input rcInput placeholder="Type something"/>
    </rc-form-field>`,
});

export const WithInput = templateWithInput.bind({});
WithInput.args = {
  outlined: false,
};

export const OutlinedWithInput = templateWithInput.bind({});
OutlinedWithInput.args = {
  outlined: true,
};

const templateWithInputDisabled: Story<FormFieldComponent> = (
  args: FormFieldComponent
) => ({
  props: {
    outlined: args['outlined'],
  },
  template: `
    <rc-form-field [outlined]="outlined">
      <rc-label>Field label</rc-label>
      <input rcInput placeholder="Type something" disabled/>
    </rc-form-field>`,
});

export const WithInputDisabled = templateWithInputDisabled.bind({});
WithInputDisabled.args = {
  outlined: false,
};

const templateWithInputRequired: Story<FormFieldComponent> = (
  args: FormFieldComponent
) => ({
  props: {
    outlined: args['outlined'],
  },
  template: `
    <rc-form-field [outlined]="outlined">
      <rc-label>Field label</rc-label>
      <input rcInput placeholder="Type something" required/>
    </rc-form-field>`,
});

export const WithInputRequired = templateWithInputRequired.bind({});
WithInputRequired.args = {
  outlined: false,
  required: true,
};

const templateWithReactiveInput: Story<FormFieldComponent> = (
  args: FormFieldComponent
) => ({
  props: {
    outlined: args['outlined'],
    control: new FormControl(null, Validators.required),
  },
  template: `
    <rc-form-field [outlined]="outlined">
      <rc-label>Field label</rc-label>
      <input rcInput placeholder="Type something" [formControl]="control" />
    </rc-form-field>`,
});

export const WithReactiveInput = templateWithReactiveInput.bind({});
