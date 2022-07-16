import { TestBed, waitForAsync } from '@angular/core/testing';

import { StorybookCustomIconComponent } from './storybook-custom-icon.component';
import { Component } from '@angular/core';
import { TemplateLookup } from '@recowd/test/utils';

describe('StorybookCustomIconComponent', () => {
  let templateLookup: TemplateLookup<HostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [StorybookCustomIconComponent],
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
  template: ` <rc-storybook-custom-icon
    [width]="width"
    [height]="height"
  ></rc-storybook-custom-icon>`,
})
class HostComponent {
  public width!: StorybookCustomIconComponent['width'];
  public height!: StorybookCustomIconComponent['height'];
}
