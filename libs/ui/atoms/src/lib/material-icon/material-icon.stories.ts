import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';
import {
  MaterialIconComponent,
  MaterialIconModule,
} from './material-icon.component';
import { CommonModule } from '@angular/common';
import materialIcons from './material-icon.json';
import { HttpClientModule } from '@angular/common/http';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'atoms/material-icon',
  component: MaterialIconComponent,
  parameters: {
    badges: [BADGE.STABLE],
    jest: 'material-icon.component',
  },
  decorators: [
    moduleMetadata({
      imports: [MaterialIconModule, CommonModule, HttpClientModule],
    }),
    componentWrapperDecorator(
      (story: string) =>
        `<div style="display: grid; gap: 2rem; grid-template-columns: repeat(auto-fill, minmax(11.2rem, 1fr))">${story}</div>`
    ),
  ],
  argTypes: {
    type: { control: false },
  },
} as Meta<MaterialIconComponent>;

const template: Story<MaterialIconComponent> = (
  args: MaterialIconComponent
) => ({
  props: {
    type: args.type,
    materialIcons: materialIcons.sort((i1, i2) =>
      i1.popularity > i2.popularity ? -1 : i1.popularity < i2.popularity ? 1 : 0
    ),
  },
  template: `
    <div *ngFor="let icon of materialIcons" style="display: flex; flex-flow: column; align-items: center; justify-content: space-between">
    <rc-material-icon [type]="type">{{icon.name}}</rc-material-icon>
    <span style="font-size: 1.2rem; color: white; line-height: 1.6rem; font-family: 'Source Code Pro',serif">{{ icon.name }}</span>
</div>
`,
});

export const Default = template.bind({});

export const Outlined = template.bind({});
Outlined.args = {
  type: 'outlined',
};

export const TwoTone = template.bind({});
TwoTone.args = {
  type: 'two-tone',
};

export const Sharp = template.bind({});
Sharp.args = {
  type: 'sharp',
};

export const Rounded = template.bind({});
Rounded.args = {
  type: 'rounded',
};
