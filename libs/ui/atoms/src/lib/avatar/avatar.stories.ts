import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MaterialIconDirective } from '../material-icon/material-icon.directive';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { AvatarDirective } from './avatar.directive';

export default {
  title: 'atoms/avatar',
  parameters: {
    badges: [BADGE.STABLE],
    jest: 'avatar.directive',
  },
  decorators: [
    moduleMetadata({
      imports: [AvatarDirective, MaterialIconDirective],
    }),
  ],
} as Meta<AvatarDirective>;

const templateForMaterialIcon: Story<AvatarDirective> = () => ({
  template: `<rc-material-icon rcAvatar>person_pin</rc-material-icon>`,
});

export const WithMaterialIcon = templateForMaterialIcon.bind({});

const templateForCustomImg: Story<AvatarDirective> = () => ({
  template: `<img rcAvatar src="assets/venom.png" alt="avatar"/>`,
});

export const WithCustomImg = templateForCustomImg.bind({});
