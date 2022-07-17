import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ListModule } from './list.module';
import { ListComponent } from './list.component';

export default {
  title: 'atoms/list',
  parameters: {
    jest: 'card.component',
  },
  decorators: [
    moduleMetadata({
      imports: [ListModule],
    }),
  ],
} as Meta<ListComponent>;

const Template: Story<ListComponent> = (args: ListComponent) => ({
  props: {
    horizontal: args.horizontal,
  },
  template: `<rc-list [horizontal]="horizontal">
<rc-list-item>Item 1</rc-list-item>
<rc-list-item>Item 2</rc-list-item>
<rc-list-item>Item 3</rc-list-item>
</rc-list>`,
});

export const Default = Template.bind({});
Default.args = {
  horizontal: false,
};
