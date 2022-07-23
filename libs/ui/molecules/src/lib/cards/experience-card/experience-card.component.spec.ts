import { TestBed, waitForAsync } from '@angular/core/testing';
import { ExperienceCardComponent } from './experience-card.component';
import { TemplateLookup } from '@recowd/test/utils';
import { Component } from '@angular/core';
import { CBP_EXPERIENCE } from '@recowd/test/data';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ExperienceCardComponent', () => {
  let templateLookup: TemplateLookup<HostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [ExperienceCardComponent, NoopAnimationsModule],
    }).compileComponents();

    templateLookup = new TemplateLookup(HostComponent);
    templateLookup.detectChanges();
  }));

  it('should create', () =>
    expect(templateLookup.firstChildElement).toMatchSnapshot());
});

@Component({
  template: ` <rc-experience-card
    [experience]="experience"
  ></rc-experience-card>`,
})
class HostComponent {
  public experience: ExperienceCardComponent['experience'] = CBP_EXPERIENCE;
}
