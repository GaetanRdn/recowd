import { TestBed, waitForAsync } from '@angular/core/testing';
import { Component } from '@angular/core';
import { TemplateLookup } from '@recowd/test/utils';
import { ContactButtonIconComponent } from './contact-button-icon.component';

describe('ContactButtonIconComponent', () => {
  let templateLookup: TemplateLookup<HostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [ContactButtonIconComponent],
    }).compileComponents();

    templateLookup = new TemplateLookup(HostComponent);
    templateLookup.detectChanges();
  }));

  it('should create', () =>
    expect(templateLookup.firstChildElement).toMatchSnapshot());
});

@Component({
  template: ` <rc-contact-button-icon></rc-contact-button-icon>`,
})
export class HostComponent {}
