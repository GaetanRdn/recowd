import { TestBed, waitForAsync } from '@angular/core/testing';

import { EducationCardComponent } from './education-card.component';
import { TemplateLookup } from '@recowd/test/utils';
import { Education } from '@recowd/models';
import { Component } from '@angular/core';

describe('EducationCardComponent', () => {
  let templateLookup: TemplateLookup<HostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [EducationCardComponent],
    }).compileComponents();

    templateLookup = new TemplateLookup(HostComponent);
  }));

  it.each([
    {
      from: '2021',
      to: '2022',
      degree: 'Master',
      logo: undefined,
      description: 'long comment',
    },
    {
      from: 2018,
      to: 2019,
      degree: 'Bac',
      logo: 'logo.png',
      description: 'another comment',
    },
  ] as Education[])('should create with %j', (education: Education) => {
    templateLookup.hostComponent.education = education;
    templateLookup.detectChanges();
    expect(templateLookup.fixture.nativeElement.children).toMatchSnapshot();
  });
});

@Component({
  template: ` <rc-education-card [education]="education"></rc-education-card>`,
})
class HostComponent {
  public education!: Education;
}
