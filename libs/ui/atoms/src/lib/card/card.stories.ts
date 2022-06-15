import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CardComponent } from './card.component';
import { CardModule } from './card.module';
import { AvatarDirective, AvatarModule } from '../avatar/avatar.directive';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { CardContentDirective } from './card-content.directive';
import { CardTitleDirective } from './card-title.directive';
import { CardSubtitleDirective } from './card-subtitle.directive';

export default {
  title: 'atoms/card',
  component: CardComponent,
  subcomponents: {
    CardContentDirective,
    CardTitleDirective,
    CardSubtitleDirective,
    AvatarDirective,
  },
  parameters: {
    badges: [BADGE.STABLE],
    jest: 'card.component',
  },
  decorators: [
    moduleMetadata({
      imports: [CardModule, AvatarModule],
    }),
  ],
} as Meta<CardComponent>;

const template: Story<CardComponent> = () => ({
  template: `<rc-card>
<rc-card-content>Simple card</rc-card-content>
</rc-card>`,
});

export const BasicCard = template.bind({});

const templateWithTitle: Story<CardComponent> = () => ({
  template: `<rc-card>
<rc-card-title>Card Title</rc-card-title>
<rc-card-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet hendrerit nisi, a bibendum ex. Donec dignissim risus quis mauris semper suscipit. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam congue consequat diam, in feugiat quam hendrerit eget. Donec ornare non felis vitae hendrerit</rc-card-content>
</rc-card>`,
});

export const CardWithTitle = templateWithTitle.bind({});

const templateWithSubTitle: Story<CardComponent> = () => ({
  template: `<rc-card>
<rc-card-title>Card Title</rc-card-title>
<rc-card-subtitle>Card subtitle</rc-card-subtitle>
<rc-card-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet hendrerit nisi, a bibendum ex. Donec dignissim risus quis mauris semper suscipit. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam congue consequat diam, in feugiat quam hendrerit eget. Donec ornare non felis vitae hendrerit</rc-card-content>
</rc-card>`,
});

export const CardWithSubtitle = templateWithSubTitle.bind({});

const templateForFullCard: Story<CardComponent> = () => ({
  template: `<rc-card>
<img rcAvatar src="assets/venom.png" alt="avatar"/>
<rc-card-title>Card Title</rc-card-title>
<rc-card-subtitle>Card subtitle</rc-card-subtitle>
<rc-card-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet hendrerit nisi, a bibendum ex. Donec dignissim risus quis mauris semper suscipit. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam congue consequat diam, in feugiat quam hendrerit eget. Donec ornare non felis vitae hendrerit</rc-card-content>
</rc-card>`,
});

export const FullCard = templateForFullCard.bind({});
