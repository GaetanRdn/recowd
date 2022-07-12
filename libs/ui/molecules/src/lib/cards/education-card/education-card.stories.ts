import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { EducationCardComponent } from './education-card.component';

export default {
  title: 'molecules/cards/education-card',
  decorators: [
    moduleMetadata({
      imports: [EducationCardComponent],
    }),
  ],
} as Meta<EducationCardComponent>;

const Template: Story<EducationCardComponent> = (
  args: EducationCardComponent
) => ({
  props: {
    education: args.education,
  },
  template: `<rc-education-card [education]="education"></rc-education-card>`,
});

export const Default = Template.bind({});
Default.args = {
  education: {
    degree: 'Master MIAGE par apprentissage',
    from: 2012,
    to: 2014,
    description:
      "Université Paris-Sud, Méthodes Informatique Appliquées à la Gestion d'entreprise",
  },
};
