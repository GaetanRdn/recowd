import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExperienceCardsListComponent } from '@recowd/ui/organisms';

@Component({
  selector: 'rc-experiences-page',
  standalone: true,
  imports: [ExperienceCardsListComponent],
  templateUrl: './experiences-page.component.html',
  styleUrls: ['./experiences-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencesPageComponent {
  public readonly experiences: ExperienceCardsListComponent['experiences'] = [
    {
      client: 'CBP',
      roles: [
        {
          contractType: 'FREELANCE',
          endDate: null,
          titre: 'Lead développeur front-end',
          startDate: '2022-03-03',
        },
        {
          contractType: 'CDI ESN',
          endDate: '2022-03-02',
          titre: 'Lead développeur front-end',
          startDate: '2021-01-01',
        },
      ],
      description:
        "Après 30 ans de vie de la chaîne de gestion de sinistres, il est venu le temps d'une refonte complète",
      localization: 'Saint-Herblain, Pays de Loire, France',
      technologies: [
        'Angular 14',
        'Nx',
        'Typescript',
        'Sass',
        'Angular Material CDK',
        'ngx-translate',
        'Rxjs',
        'Jest',
        'Storybook',
        'Cypress',
        'Gitlab CI',
      ],
      tasks: [
        "Proposition et mise en place d'une approche atomic design",
        "Former l'équipe à Angular (présentation, pair-programming, points d'échanges)",
        "Prôner l'usage du TDD",
        'Challenger les maquettes fournies par les UI/UXs',
        'Participer aux recrutements pour diverses équipes',
        'travailler de pair avec la PO afin de prioriser les tâches',
        "Remonter les alertes nécessaires sur l'avancée des devs",
        'POC pour la mise en place de Storybook',
        'POC pour la mise en place de Nx',
        'POC pour la mise en place de tests Cypress pour Storybook',
      ],
    },
    {
      client: 'S2E',
      localization: 'Nantes, Pays de Loire, France',
      description: "Run sur une application d'épargne salariale",
      roles: [
        {
          contractType: 'CDI ESN',
          endDate: '2020-12-31',
          startDate: '2020-06-01',
          titre: 'Développeur full-stack',
        },
      ],
      technologies: ['Java 8', 'Maven', 'JSF2', 'Gitlab CI'],
      tasks: ['Maintenance corrective et évolutive'],
    },
    {
      client: 'norsys',
      localization: 'Nantes, Pays de Loire, France',
      description:
        "Certains d'entre nous ce sont retrouvés en inter-contrat durant le premier confinement. Afin de ne pas trop subir et d'essayé d'avoir une vie normal, on a monté une équipe afin de réaliser une application permettant géolocaliser sur une carte les missions de nos collaborateurs",
      roles: [
        {
          contractType: 'CDI',
          endDate: '2020-06-01',
          startDate: '2020-04-01',
          titre: 'Lead développeur',
        },
      ],
      technologies: [
        'Docker',
        'Angular 9',
        'Gitlab CI',
        'OpenStreetMap',
        'NodeJS',
        'MongoDB',
      ],
      tasks: ['Maintenance corrective et évolutive'],
    },
    {
      client: 'norsys',
      localization: 'Nantes, Pays de Loire, France',
      description: 'Run sur un site web e-commerce de vente de portes',
      roles: [
        {
          contractType: 'CDI',
          endDate: '2020-03-31',
          startDate: '2019-07-01',
          titre: 'Lead développeur',
        },
      ],
      technologies: ['PHP', 'Symfony', 'Docker', 'Gitlab CI'],
      tasks: ['Maintenance corrective et évolutive'],
    },
    {
      client: 'Vif',
      localization: 'La Chapelle/Erdre, Pays de Loire, France',
      description:
        "Développement from scratch d'une application web à destination des TPEs pour la gestion de leurs produits, clients, commandes et factures.",
      roles: [
        {
          contractType: 'CDI ESN',
          endDate: '2019-06-31',
          startDate: '2017-12-31',
          titre: 'Développeur full-stack',
        },
      ],
      technologies: [
        'Angular 7',
        'Angular Material 7',
        'Java 8',
        'maven',
        'tomcat',
        'Gitlab CI',
      ],
      tasks: [
        'Développement des features',
        "Challenger les maquettes fournies par l'UI/UX",
        'Maintenance corrective et évolutive',
      ],
    },
    {
      client: 'Oui.sncf',
      localization: 'Nantes, Pays de Loire, France',
      description:
        "Maintenance évolutive et corrective sur le back-office de l'application web de devis, vente et après vente de la SNCF.",
      roles: [
        {
          contractType: 'CDI ESN',
          endDate: '2017-12-31',
          startDate: '2014-10-01',
          titre: 'Développeur backend-end',
        },
      ],
      technologies: ['REST', 'Java 8', 'Git', 'Maven', 'Tomcat'],
      tasks: [
        'Développement de features / corrections',
        'Chiffrages',
        'Cadrage technique',
      ],
    },
  ];
}
