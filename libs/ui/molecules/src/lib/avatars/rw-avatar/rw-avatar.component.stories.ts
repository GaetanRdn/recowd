import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RwAvatarComponent } from './rw-avatar.component';

export default {
  title: 'molecules/avatars/rw-avatar',
  decorators: [
    moduleMetadata({
      imports: [RwAvatarComponent],
    }),
  ],
} as Meta<RwAvatarComponent>;

const Template: Story<RwAvatarComponent> = () => ({
  template: `<rc-rw-avatar></rc-rw-avatar>`,
});

export const Default = Template.bind({});
