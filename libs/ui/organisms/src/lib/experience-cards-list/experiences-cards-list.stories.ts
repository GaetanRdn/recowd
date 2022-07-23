import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ExperienceCardsListComponent } from './experience-cards-list.component';
import { CBP_EXPERIENCE, NORSYS_EXPERIENCE } from '@recowd/test/data';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'organisms/experience-cards-list',
  decorators: [
    moduleMetadata({
      imports: [ExperienceCardsListComponent, BrowserAnimationsModule],
    }),
  ],
} as Meta<ExperienceCardsListComponent>;

const Template: Story<ExperienceCardsListComponent> = (
  args: ExperienceCardsListComponent
) => ({
  props: {
    experiences: args.experiences,
  },
  template: `<rc-experience-cards-list [experiences]="experiences"></rc-experience-cards-list>`,
});

export const Default = Template.bind({});
Default.args = {
  experiences: [CBP_EXPERIENCE, NORSYS_EXPERIENCE, CBP_EXPERIENCE],
};
