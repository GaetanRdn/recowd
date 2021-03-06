import { TestBed, waitForAsync } from '@angular/core/testing';

import { EducationButtonWithIconComponent } from './education-button-with-icon.component';
import { Component } from '@angular/core';
import { TemplateLookup } from '@recowd/test/utils';
import { TranslateModule } from '@ngx-translate/core';

describe('EducationButtonWithIconComponent', () => {
  let templateLookup: TemplateLookup<HostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [EducationButtonWithIconComponent, TranslateModule.forRoot()],
    }).compileComponents();

    templateLookup = new TemplateLookup(HostComponent);
    templateLookup.detectChanges();
  }));

  it('should create', () =>
    expect(templateLookup.firstChildElement).toMatchSnapshot());
});

@Component({
  template: ` <rc-education-button-with-icon></rc-education-button-with-icon>`,
})
export class HostComponent {}
