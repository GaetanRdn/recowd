import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ExperienceCardComponent } from './experience-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'molecules/cards/experience-card',
  decorators: [
    moduleMetadata({
      imports: [ExperienceCardComponent, BrowserAnimationsModule],
    }),
  ],
} as Meta<ExperienceCardComponent>;

const Template: Story<ExperienceCardComponent> = (
  args: ExperienceCardComponent
) => ({
  props: {
    experience: args.experience,
  },
  template: `<rc-experience-card [experience]="experience"></rc-experience-card>`,
});

export const Default = Template.bind({});
Default.args = {
  experience: {
    client: 'CBP',
    localization: 'Saint-Herblain, 44800, France',
    roles: [
      {
        titre: 'Lead developpeur front-end',
        contractType: 'FREELANCE',
        startDate: '2021-01-01',
        endDate: null,
      },
    ],
    tasks: [
      'Mise en place une approche atomic design',
      'challengé / formé l’équipe aux développement Angular (présentations, pair programming)',
      'prôné l’usage du TDD',
      'challengé les maquettes fournies par l’UX',
      'participé aux recrutement pour diverses équipes',
      'travaillé de pair avec la PO afin de prioriser les tâches avec un coefficient de plus value',
      'remonté les alertes nécessaires sur l’avancée des devs',
      'POC pour la mise en place de Storybook',
      'POC pour la mise en place de Nx',
      'POC pour la mise en place de tests Cypress avec Storybook',
    ],
    technos: [
      'Nx',
      'Angular',
      'Jest',
      'Storybook',
      'Cypress',
      'Sass',
      'Angular material CDK',
      'ngx-translate',
      'Rxjs',
    ],
    description: 'Refonte d’une application de gestion de sinistres en Angular',
  },
};
