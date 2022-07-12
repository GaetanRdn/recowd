import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { EducationAccordionComponent } from './education-accordion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'molecules/accordions/education-accordion',
  decorators: [
    moduleMetadata({
      imports: [EducationAccordionComponent, BrowserAnimationsModule],
    }),
  ],
} as Meta<EducationAccordionComponent>;

const Template: Story<EducationAccordionComponent> = () => ({
  template: `<rc-education-accordion></rc-education-accordion>`,
});

export const Default = Template.bind({});
