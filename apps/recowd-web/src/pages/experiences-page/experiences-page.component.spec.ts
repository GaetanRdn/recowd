import { TestBed, waitForAsync } from '@angular/core/testing';

import { ExperiencesPageComponent } from './experiences-page.component';
import { TemplateLookup } from '@recowd/test/utils';
import { TranslateModule } from '@ngx-translate/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ExperienceService } from '../../services/experience.service';
import { of } from 'rxjs';

describe('ExperiencesPageComponent', () => {
  let templateLookup: TemplateLookup<ExperiencesPageComponent>;
  let experienceService: ExperienceService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ExperiencesPageComponent,
        TranslateModule.forRoot(),
        NoopAnimationsModule,
      ],
      providers: [
        { provide: ExperienceService, useValue: { getAll: jest.fn() } },
      ],
    }).compileComponents();

    experienceService = TestBed.inject(ExperienceService);
    jest.spyOn(experienceService, 'getAll').mockReturnValueOnce(
      of([
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
      ])
    );
    templateLookup = new TemplateLookup(ExperiencesPageComponent);
    templateLookup.detectChanges();
  }));

  it('should create', () =>
    expect(templateLookup.fixture.nativeElement.children).toMatchSnapshot());
});
