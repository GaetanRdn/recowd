import { Component } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { AvatarDirective } from './avatar.directive';
import { TemplateLookup } from '@recowd/test/utils';

describe('AvatarDirective', () => {
  beforeEach(waitForAsync(() =>
    TestBed.configureTestingModule({
      declarations: [
        MaterialIconHostComponent,
        CustomImgHostComponent,
        AvatarDirective,
      ],
    }).compileComponents()));

  it('should create with material icon', () => {
    const templateLookup: TemplateLookup<MaterialIconHostComponent> =
      new TemplateLookup(MaterialIconHostComponent);
    templateLookup.detectChanges();
    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });

  it('should create with custom img', () => {
    const templateLookup: TemplateLookup<CustomImgHostComponent> =
      new TemplateLookup(CustomImgHostComponent);
    templateLookup.detectChanges();
    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });
});

@Component({
  template: ` <rc-material-icon rcAvatar>person_pin</rc-material-icon>`,
})
class MaterialIconHostComponent {}

@Component({
  template: ` <img rcAvatar src="assets/icons/test.svg" alt="avatar" />`,
})
class CustomImgHostComponent {}
