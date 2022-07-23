import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TasksListComponent } from './tasks-list.component';

export default {
  title: 'molecules/lists/tasks-list',
  decorators: [
    moduleMetadata({
      imports: [TasksListComponent],
    }),
  ],
} as Meta<TasksListComponent>;

const Template: Story<TasksListComponent> = (args: TasksListComponent) => ({
  props: {
    tasks: args.tasks,
  },
  template: `<rc-tasks-list [tasks]="tasks"></rc-tasks-list>`,
});

export const Default = Template.bind({});
Default.args = {
  tasks: ['few things', 'many things', 'too many things'],
};
