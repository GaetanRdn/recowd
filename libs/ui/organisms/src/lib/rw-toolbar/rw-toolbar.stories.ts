import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { RwToolbarComponent } from './rw-toolbar.component';

export default {
  title: 'organisms/rw-toolbar',
  decorators: [
    moduleMetadata({
      imports: [RwToolbarComponent],
    }),
  ],
} as Meta<RwToolbarComponent>;

const Template: Story<RwToolbarComponent> = () => ({
  props: {
    experienceClick: action('experienceClick'),
    educationClick: action('educationClick'),
    contactClick: action('contactClick'),
  },
  template: `<rc-rw-toolbar (contactClick)="contactClick()" (educationClick)="educationClick()" (experienceClick)="experienceClick()"></rc-rw-toolbar>`,
});

export const Default = Template.bind({});
