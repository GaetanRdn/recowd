import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CheckboxComponent, CheckboxModule } from './checkbox.component';
import { action } from '@storybook/addon-actions';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

export default {
  title: 'atoms/forms/checkbox',
  component: CheckboxComponent,
  parameters: {
    badges: [BADGE.STABLE],
    jest: 'checkbox.component',
  },
  decorators: [
    moduleMetadata({
      imports: [CheckboxModule, ReactiveFormsModule],
    }),
  ],
} as Meta<CheckboxComponent<number>>;

const template: Story<CheckboxComponent<number>> = (
  args: CheckboxComponent<number>
) => ({
  props: {
    labelBefore: args.labelBefore,
    checked: args.checked,
    disabled: args.disabled,
    log: action('checkedChange'),
  },
  template: `<rc-checkbox [labelBefore]="labelBefore" [checked]="checked" [value]="1" [disabled]="disabled" (checkedChange)="log($event)">Used</rc-checkbox>`,
});

export const Default = template.bind({});
Default.args = {
  labelBefore: false,
  checked: false,
  disabled: false,
};

const reactiveTemplate: Story<CheckboxComponent<number>> = (
  args: CheckboxComponent<number>
) => ({
  props: {
    labelBefore: args.labelBefore,
    control: new FormControl({
      value: args.checked ? 1 : null,
      disabled: args.disabled,
    }),
    log: action('checkedChange'),
  },
  template: `<rc-checkbox [labelBefore]="labelBefore" [formControl]="control" [value]="1" (checkedChange)="log($event)">Reactively Used</rc-checkbox>`,
});

export const Reactive = reactiveTemplate.bind({});
Reactive.args = {
  ...Default.args,
};
