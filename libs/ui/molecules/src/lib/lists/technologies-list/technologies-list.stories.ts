import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TechnologiesListComponent } from './technologies-list.component';

export default {
  title: 'molecules/lists/technologies-list',
  decorators: [
    moduleMetadata({
      imports: [TechnologiesListComponent],
    }),
  ],
} as Meta<TechnologiesListComponent>;

const Template: Story<TechnologiesListComponent> = (
  args: TechnologiesListComponent
) => ({
  props: {
    roles: args.technologies,
  },
  template: `<rc-technologies-list [technologies]="roles"></rc-technologies-list>`,
});

export const Default = Template.bind({});
Default.args = {
  technologies: ['Angular', 'Storybook', 'Nx'],
};
