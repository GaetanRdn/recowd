import { TestBed, waitForAsync } from '@angular/core/testing';
import { Component } from '@angular/core';
import { TemplateLookup } from '@recowd/test/utils';
import { LabelModule } from './label.component';

describe('LabelComponent', () => {
  let templateLookup: TemplateLookup<HostComponent>;

  beforeEach(waitForAsync(() =>
    TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [LabelModule],
    }).compileComponents()));

  beforeEach(() => (templateLookup = new TemplateLookup(HostComponent)));

  it.each(['Name', 'First name'])(
    'should create with label %s',
    (label: string) => {
      templateLookup.hostComponent.label = label;
      templateLookup.detectChanges();
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    }
  );
});

@Component({
  template: ` <rc-label>{{ label }}</rc-label>`,
})
export class HostComponent {
  public label!: string;
}
