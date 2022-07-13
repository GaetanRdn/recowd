import { TestBed, waitForAsync } from '@angular/core/testing';

import { EducationCardsListComponent } from './education-cards-list.component';
import { Component } from '@angular/core';
import { Education } from '@recowd/models';
import { TemplateLookup } from '@recowd/test/utils';

describe('EducationCardsListComponent', () => {
  let templateLookup: TemplateLookup<HostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [EducationCardsListComponent],
    }).compileComponents();

    templateLookup = new TemplateLookup(HostComponent);
    templateLookup.detectChanges();
  }));

  it('should create with cards', () =>
    expect(templateLookup.firstChildElement).toMatchSnapshot());

  it('should create empty', () => {
    templateLookup.hostComponent.educations = [];
    templateLookup.detectChanges();
    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });
});

@Component({
  template: ` <rc-education-cards-list
    [educations]="educations"
  ></rc-education-cards-list>`,
})
class HostComponent {
  public educations: Readonly<Education[]> = [
    {
      degree: 'Master MIAGE par apprentissage',
      from: 2012,
      to: 2014,
      description:
        "Université Paris-Sud, Méthodes Informatique Appliquées à la Gestion d'entreprise",
      logo: 'universite-paris-sud.jpeg',
    },
    {
      degree: 'Licence MIAGE par apprentissage',
      from: 2011,
      to: 2012,
      description:
        "Université Paris-Sud, Méthodes Informatique Appliquées à la Gestion d'entreprise",
      logo: 'universite-paris-sud.jpeg',
    },
    {
      degree: 'DUT informatique et gestion',
      from: 2008,
      to: 2010,
      description: "IUT Aix-Marseille II, informatique et gestion d'entreprise",
      logo: 'iut-aix-marseille.jpeg',
    },
  ] as const;
}
