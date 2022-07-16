import { TestBed, waitForAsync } from '@angular/core/testing';
import { CbpCustomIconComponent } from './cbp-custom-icon.component';
import { TemplateLookup } from '@recowd/test/utils';
import { NxCustomIconComponent } from '../nx-custom-icon/nx-custom-icon.component';
import { Component } from '@angular/core';

describe('CbpCustomIconComponent', () => {
  let templateLookup: TemplateLookup<HostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [CbpCustomIconComponent],
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
  template: ` <rc-cbp-custom-icon
    [width]="width"
    [height]="height"
  ></rc-cbp-custom-icon>`,
})
class HostComponent {
  public width!: NxCustomIconComponent['width'];
  public height!: NxCustomIconComponent['height'];
}
