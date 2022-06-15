import { Component } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { ToolbarComponent } from './toolbar.component';
import { TemplateLookup } from '@recowd/test/utils';

describe('ToolbarComponent', () => {
  beforeEach(waitForAsync(() =>
    TestBed.configureTestingModule({
      declarations: [
        ToolbarComponent,
        OnlyTextHostComponent,
        WithButtonHostComponent,
      ],
    }).compileComponents()));

  it('should create with only text', () => {
    const templateLookup: TemplateLookup<OnlyTextHostComponent> =
      new TemplateLookup(OnlyTextHostComponent);
    templateLookup.detectChanges();
    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });

  it('should create with button', () => {
    const templateLookup: TemplateLookup<WithButtonHostComponent> =
      new TemplateLookup(WithButtonHostComponent);
    templateLookup.detectChanges();
    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });
});

@Component({
  template: ` <rc-toolbar>Design System</rc-toolbar>`,
})
class OnlyTextHostComponent {}

@Component({
  template: ` <rc-toolbar>
    <button>Action1</button>
  </rc-toolbar>`,
})
class WithButtonHostComponent {}
