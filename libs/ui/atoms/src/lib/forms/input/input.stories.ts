import { Args, Meta, moduleMetadata, Story } from '@storybook/angular';
import { InputDirective, InputModule } from './input.directive';
import { action } from '@storybook/addon-actions';

export default {
  title: 'atoms/forms/input',
  component: InputDirective,
  decorators: [moduleMetadata({ imports: [InputModule] })],
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
