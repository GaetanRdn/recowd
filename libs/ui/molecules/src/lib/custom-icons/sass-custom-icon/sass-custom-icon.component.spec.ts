import { TestBed, waitForAsync } from '@angular/core/testing';

import { SassCustomIconComponent } from './sass-custom-icon.component';
import { Component } from '@angular/core';
import { TemplateLookup } from '@recowd/test/utils';

describe('SassCustomIconComponent', () => {
  let templateLookup: TemplateLookup<HostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [SassCustomIconComponent],
    }).compileComponents();

    templateLookup = new TemplateLookup(HostComponent);
  }));

  it.each`
    width | height
    ${32} | ${undefined}
    ${16} | ${24}
  `(
    'should create with name $name, width $width and height $height',
    ({ width, height }) => {
      templateLookup.hostComponent.width = width;
      templateLookup.hostComponent.height = height;

      templateLookup.detectChanges();

      expect(templateLookup.firstChildElement).toMatchSnapshot();
    }
  );
});

@Component({
  template: ` <rc-sass-custom-icon
    [width]="width"
    [height]="height"
  ></rc-sass-custom-icon>`,
})
class HostComponent {
  public width!: SassCustomIconComponent['width'];
  public height!: SassCustomIconComponent['height'];
}
