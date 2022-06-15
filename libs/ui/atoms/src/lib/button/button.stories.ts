import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ButtonDirective, ButtonModule } from './button.directive';
import { MaterialIconModule } from '../material-icon/material-icon.component';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'atoms/buttons',
  component: ButtonDirective,
  parameters: {
    badges: [BADGE.STABLE],
    jest: 'button.directive',
  },
  decorators: [
    moduleMetadata({
      imports: [ButtonModule, MaterialIconModule],
    }),
  ],
} as Meta<ButtonDirective>;

const templateForButtonIcon: Story<ButtonDirective> = (
  args: ButtonDirective
) => ({
  props: {
    disabled: args.disabled,
  },
  template: `<button rcButtonIcon [disabled]="disabled"><rc-material-icon>settings</rc-material-icon></button>`,
});

export const ButtonIcon = templateForButtonIcon.bind({});
ButtonIcon.args = {
  disabled: false,
};

const templateForLinkIcon: Story<ButtonDirective> = (
  args: ButtonDirective
) => ({
  props: {
    disabled: args.disabled,
  },
  template: `<a rcButtonIcon [disabled]="disabled"><rc-material-icon>home</rc-material-icon></a>`,
});

export const LinkIcon = templateForLinkIcon.bind({});
LinkIcon.args = {
  ...ButtonIcon.args,
};
