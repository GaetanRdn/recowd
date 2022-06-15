import { Component } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { MaterialIconDirective } from './material-icon.directive';
import { TemplateLookup } from '@recowd/test/utils';
import { Nullable } from '@recowd/utility-types';

describe('MaterialIconDirective', () => {
  let templateLookup: TemplateLookup<HostComponent>;

  beforeEach(waitForAsync(() =>
    TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [MaterialIconDirective],
    }).compileComponents()));

  beforeEach(() => (templateLookup = new TemplateLookup(HostComponent)));

  test.each(['home', 'pin_push'])('should create icon %s', (icon: string) => {
    // WHEN
    templateLookup.hostComponent.icon = icon;
    templateLookup.detectChanges();

    // THEN
    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });

  test.each([
    'filled',
    'outlined',
    'two-tone',
    'sharp',
  ] as MaterialIconDirective['type'][])(
    'should be of type %s',
    (type: MaterialIconDirective['type']) => {
      // WHEN
      templateLookup.hostComponent.icon = 'home';
      templateLookup.hostComponent.type = type;
      templateLookup.detectChanges();

      // THEN
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    }
  );

  test.each([undefined, null])(
    'should be filled when type is %s',
    (type?: Nullable<MaterialIconDirective['type']>) => {
      // WHEN
      templateLookup.hostComponent.icon = 'home';
      templateLookup.hostComponent.type = type;
      templateLookup.detectChanges();

      // THEN
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    }
  );
});

@Component({
  template: ` <rc-material-icon [type]="type">{{ icon }}</rc-material-icon>`,
})
class HostComponent {
  public icon!: string;
  public type?: Nullable<MaterialIconDirective['type']>;
}
