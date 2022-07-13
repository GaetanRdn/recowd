import { TestBed, waitForAsync } from '@angular/core/testing';
import { Component } from '@angular/core';
import { TemplateLookup } from '@recowd/test/utils';
import { ExperienceButtonWithIconComponent } from './experience-button-with-icon.component';

describe('ExperienceButtonWithIconComponent', () => {
  let templateLookup: TemplateLookup<HostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [ExperienceButtonWithIconComponent],
    }).compileComponents();

    templateLookup = new TemplateLookup(HostComponent);
    templateLookup.detectChanges();
  }));

  it('should create', () =>
    expect(templateLookup.firstChildElement).toMatchSnapshot());
});

@Component({
  template: ` <rc-experience-button-with-icon></rc-experience-button-with-icon>`,
})
export class HostComponent {}
