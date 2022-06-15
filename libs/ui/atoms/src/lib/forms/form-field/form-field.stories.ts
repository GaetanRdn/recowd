import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Args, Meta, moduleMetadata, Story } from '@storybook/angular';
import { FormFieldComponent, FormFieldModule } from './form-field.component';
import { InputDirective } from '../input/input.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from '../checkbox/checkbox.component';

export default {
  title: 'atoms/forms/form-field',
  component: FormFieldComponent,
  parameters: {
    badges: [BADGE.STABLE],
    jest: 'form-field.directive',
  },
  decorators: [
    moduleMetadata({
      imports: [
        FormFieldModule,
        InputDirective,
        CheckboxModule,
        ReactiveFormsModule,
      ],
    }),
  ],
} as Meta<FormFieldComponent>;

const templateWithInput: Story = (args: Args) => ({
  props: {
    outlined: args['outlined'],
    disabled: args['disabled'],
    required: args['required'],
  },
  template: `
    <rc-form-field [outlined]="outlined">
      <rc-label>Field label</rc-label>
      <input rcInput placeholder="Type something" [disabled]="disabled" [required]="required"/>
    </rc-form-field>`,
});

export const WithInput = templateWithInput.bind({});
WithInput.args = {
  outlined: false,
  disabled: false,
  required: false,
};

const templateWithCheckbox: Story = (args: Args) => ({
  props: {
    outlined: args['outlined'],
    disabled: args['disabled'],
    required: args['required'],
  },
  template: `
    <rc-form-field [outlined]="outlined">
      <rc-label>Field label</rc-label>
      <rc-checkbox [disabled]="disabled" [required]="required">Used</rc-checkbox>
    </rc-form-field>`,
});

export const WithCheckbox = templateWithCheckbox.bind({});
WithCheckbox.args = {
  outlined: false,
  disabled: false,
  required: false,
};
