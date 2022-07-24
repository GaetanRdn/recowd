import { TestBed, waitForAsync } from '@angular/core/testing';
import { ExperienceCardsListComponent } from './experience-cards-list.component';
import { TemplateLookup } from '@recowd/test/utils';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CBP_EXPERIENCE, NORSYS_EXPERIENCE } from '@recowd/test/data';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ExperienceCardsListComponent', () => {
  let templateLookup: TemplateLookup<HostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [
        ExperienceCardsListComponent,
        TranslateModule.forRoot(),
        NoopAnimationsModule,
      ],
    }).compileComponents();

    templateLookup = new TemplateLookup(HostComponent);
    templateLookup.detectChanges();
  }));

  it('should create empty', () =>
    expect(templateLookup.firstChildElement).toMatchSnapshot());

  it('should create with experiences', () => {
    templateLookup.hostComponent.experiences = [
      CBP_EXPERIENCE,
      NORSYS_EXPERIENCE,
    ];

    templateLookup.detectChanges();

    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });
});

@Component({
  template: ` <rc-experience-cards-list
    [experiences]="experiences"
  ></rc-experience-cards-list>`,
})
class HostComponent {
  public experiences: ExperienceCardsListComponent['experiences'] = [];
}
