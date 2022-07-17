import { TestBed, waitForAsync } from '@angular/core/testing';

import { PartnersButtonWithIconComponent } from './partners-button-with-icon.component';
import { Component } from '@angular/core';
import { TemplateLookup } from '@recowd/test/utils';
import { TranslateModule } from '@ngx-translate/core';

describe('PartnersButtonWithIconComponent', () => {
  let templateLookup: TemplateLookup<HostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [PartnersButtonWithIconComponent, TranslateModule.forRoot()],
    }).compileComponents();

    templateLookup = new TemplateLookup(HostComponent);
    templateLookup.detectChanges();
  }));

  it('should create', () =>
    expect(templateLookup.firstChildElement).toMatchSnapshot());
});

@Component({
  template: ` <rc-partners-button-with-icon></rc-partners-button-with-icon>`,
})
export class HostComponent {}
