import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RolesListComponent } from './roles-list.component';

export default {
  title: 'molecules/lists/roles-list',
  decorators: [
    moduleMetadata({
      imports: [RolesListComponent],
    }),
  ],
} as Meta<RolesListComponent>;

const Template: Story<RolesListComponent> = (args: RolesListComponent) => ({
  props: {
    roles: args.roles,
  },
  template: `<rc-roles-list [roles]="roles"></rc-roles-list>`,
});

export const Default = Template.bind({});
Default.args = {
  roles: [
    {
      titre: 'Lead',
      startDate: '2020-01-01',
      endDate: null,
      contractType: 'FREELANCE',
    },
    {
      titre: 'Dev',
      startDate: '2019-01-01',
      endDate: '2019-12-31',
      contractType: 'CDI',
    },
  ],
};
