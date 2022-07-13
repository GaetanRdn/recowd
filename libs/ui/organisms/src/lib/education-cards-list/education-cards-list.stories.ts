import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { EducationCardsListComponent } from './education-cards-list.component';

export default {
  title: 'organisms/education-cards-list',
  decorators: [
    moduleMetadata({
      imports: [EducationCardsListComponent],
    }),
  ],
} as Meta<EducationCardsListComponent>;

const Template: Story<EducationCardsListComponent> = (
  args: EducationCardsListComponent
) => ({
  props: {
    educations: args.educations,
  },
  template: `<rc-education-cards-list [educations]="educations"></rc-education-cards-list>`,
});

export const Default = Template.bind({});
Default.args = {
  educations: [
    {
      degree: 'Master MIAGE par apprentissage',
      from: 2012,
      to: 2014,
      description:
        "Université Paris-Sud, Méthodes Informatique Appliquées à la Gestion d'entreprise",
    },
    {
      degree: 'Licence MIAGE par apprentissage',
      from: 2011,
      to: 2012,
      description:
        "Université Paris-Sud, Méthodes Informatique Appliquées à la Gestion d'entreprise",
    },
    {
      degree: 'DUT informatique et gestion',
      from: 2008,
      to: 2010,
      description: "IUT Aix-Marseille II, informatique et gestion d'entreprise",
    },
  ],
};
