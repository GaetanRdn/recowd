import { Args, Meta, moduleMetadata, Story } from '@storybook/angular';
import { InputDirective, InputModule } from './input.directive';
import { action } from '@storybook/addon-actions';
import { FormsModule } from '@angular/forms';

export default {
  title: 'atoms/forms/input',
  component: InputDirective,
  decorators: [moduleMetadata({ imports: [InputModule, FormsModule] })],
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

const templateForTemplateDriven: Story = () => ({
  props: {
    valueChange: action('log'),
    inputValue: '',
  },
  template: `
  <p style="color: white; font-size: 16px;">inputValue: {{ inputValue }}</p>
  <input rcInput placeholder="Type something" [(ngModel)]="inputValue" (valueChange)="valueChange($event)"/>`,
});

export const TemplateDriven = templateForTemplateDriven.bind({});
