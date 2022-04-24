import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NavMenuComponent } from './nav-menu.component';
import { NavMenuItemDirective } from './nav-menu-item.directive';
import { NavMenuModule } from './nav-menu.module';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'atoms/nav-menu',
  component: NavMenuComponent,
  subcomponents: {
    NavMenuItemDirective,
  },
  parameters: {
    badges: [BADGE.STABLE],
    jest: 'nav-menu.component',
  },
  decorators: [
    moduleMetadata({
      imports: [NavMenuModule],
    }),
  ],
} as Meta<NavMenuComponent>;

const template: Story<NavMenuComponent> = () => ({
  template: `<rc-nav-menu>
<rc-nav-menu-item>Item 1</rc-nav-menu-item>
<rc-nav-menu-item>Item 2</rc-nav-menu-item>
<rc-nav-menu-item>Item 3</rc-nav-menu-item>
<rc-nav-menu-item>Item 4</rc-nav-menu-item>
</rc-nav-menu>`,
});

export const Default = template.bind({});
