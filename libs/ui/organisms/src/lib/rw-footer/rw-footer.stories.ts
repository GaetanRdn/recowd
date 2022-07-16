import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RwFooterComponent } from './rw-footer.component';

export default {
  title: 'organisms/rw-footer',
  decorators: [
    moduleMetadata({
      imports: [RwFooterComponent],
    }),
  ],
} as Meta<RwFooterComponent>;

const Template: Story<RwFooterComponent> = () => ({
  template: `<rc-rw-footer></rc-rw-footer>`,
});

export const Default = Template.bind({});
