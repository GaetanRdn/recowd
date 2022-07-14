import { TestBed, waitForAsync } from '@angular/core/testing';

import { CustomIconComponent } from './custom-icon.component';
import { Component } from '@angular/core';
import { TemplateLookup } from '@recowd/test/utils';

describe('CustomIconComponent', () => {
  let templateLookup: TemplateLookup<HostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [CustomIconComponent],
    }).compileComponents();

    templateLookup = new TemplateLookup(HostComponent);
  }));

  it.each`
    name       | width | height
    ${'test'}  | ${32} | ${undefined}
    ${'test2'} | ${16} | ${24}
  `(
    'should create with name $name, width $width and height $height',
    ({ name, width, height }) => {
      templateLookup.hostComponent.name = name;
      templateLookup.hostComponent.width = width;
      templateLookup.hostComponent.height = height;

      templateLookup.detectChanges();

      expect(templateLookup.firstChildElement).toMatchSnapshot();
    }
  );
});

@Component({
  template: ` <rc-custom-icon
    [name]="name"
    [width]="width"
    [height]="height"
  ></rc-custom-icon>`,
})
class HostComponent {
  public name!: CustomIconComponent['name'];
  public width!: CustomIconComponent['width'];
  public height!: CustomIconComponent['height'];
}
