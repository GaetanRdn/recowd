import { TestBed, waitForAsync } from '@angular/core/testing';

import { RwAvatarComponent } from './rw-avatar.component';
import { TemplateLookup } from '@recowd/test/utils';
import { Component } from '@angular/core';

describe('RwAvatarComponent', () => {
  let templateLookup: TemplateLookup<HostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [RwAvatarComponent],
    }).compileComponents();

    templateLookup = new TemplateLookup(HostComponent);
    templateLookup.detectChanges();
  }));

  it('should create', () =>
    expect(templateLookup.firstChildElement).toMatchSnapshot());
});

@Component({
  template: ` <rc-rw-avatars></rc-rw-avatars>`,
})
class HostComponent {}
