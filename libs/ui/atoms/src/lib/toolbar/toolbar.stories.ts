import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MaterialIconComponent } from '../material-icon/material-icon.component';
import { ToolbarComponent } from './toolbar.component';
import { ButtonModule } from '../button/button.directive';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'atoms/toolbar',
  component: ToolbarComponent,
  parameters: {
    badges: [BADGE.STABLE],
    jest: 'toolbar.directive',
  },
  decorators: [
    moduleMetadata({
      imports: [ToolbarComponent, MaterialIconComponent, ButtonModule],
    }),
  ],
} as Meta<ToolbarComponent>;

const templateForOnlyText: Story<ToolbarComponent> = () => ({
  template: `<rc-toolbar>Design System</rc-toolbar>`,
});

export const OnlyText = templateForOnlyText.bind({});

const templateForOnlyButton: Story<ToolbarComponent> = () => ({
  template: `<rc-toolbar><button rcButtonIcon><rc-material-icon>menu</rc-material-icon></button></rc-toolbar>`,
});

export const OnlyButton = templateForOnlyButton.bind({});

const templateForBothTextAndButton: Story<ToolbarComponent> = () => ({
  template: `<rc-toolbar>
<button rcButtonIcon><rc-material-icon>menu</rc-material-icon></button>
Design System
<span style="flex: 1 1 auto">&nbsp;</span>
<button rcButtonIcon><rc-material-icon>favorite</rc-material-icon></button>
<button rcButtonIcon><rc-material-icon>settings</rc-material-icon></button>
</rc-toolbar>`,
});

export const BothTextAndButton = templateForBothTextAndButton.bind({});
