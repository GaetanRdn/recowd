import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { ButtonDirective } from './button.directive';
import { TemplateLookup } from '@recowd/test/utils';

describe('ButtonDirective', () => {
  beforeEach(waitForAsync(() =>
    TestBed.configureTestingModule({
      declarations: [
        ButtonIconHostComponent,
        LinkIconHostComponent,
        ButtonWithIconHostComponent,
        LinkWithIconHostComponent,
      ],
      imports: [ButtonDirective],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()));

  describe('ButtonIcon', () => {
    let templateLookup: TemplateLookup<ButtonIconHostComponent>;

    beforeEach(
      () => (templateLookup = new TemplateLookup(ButtonIconHostComponent))
    );

    it('should create', () => {
      templateLookup.detectChanges();
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });

    it('should be disabled', () => {
      // WHEN
      templateLookup.hostComponent.disabled = true;
      templateLookup.detectChanges();

      // THEN
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });
  });

  describe('LinkIcon', () => {
    let templateLookup: TemplateLookup<LinkIconHostComponent>;

    beforeEach(
      () => (templateLookup = new TemplateLookup(LinkIconHostComponent))
    );

    it('should create', () => {
      templateLookup.detectChanges();
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });

    it('should be disabled', () => {
      // WHEN
      templateLookup.hostComponent.disabled = true;
      templateLookup.detectChanges();

      // THEN
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });
  });

  describe('Button with Icon', () => {
    let templateLookup: TemplateLookup<ButtonWithIconHostComponent>;

    beforeEach(
      () => (templateLookup = new TemplateLookup(ButtonWithIconHostComponent))
    );

    it('should create', () => {
      templateLookup.detectChanges();
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });

    it('should be disabled', () => {
      // WHEN
      templateLookup.hostComponent.disabled = true;
      templateLookup.detectChanges();

      // THEN
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });
  });

  describe('Link with Icon', () => {
    let templateLookup: TemplateLookup<LinkWithIconHostComponent>;

    beforeEach(
      () => (templateLookup = new TemplateLookup(LinkWithIconHostComponent))
    );

    it('should create', () => {
      templateLookup.detectChanges();
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });

    it('should be disabled', () => {
      // WHEN
      templateLookup.hostComponent.disabled = true;
      templateLookup.detectChanges();

      // THEN
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });
  });
});

@Component({
  template: ` <button rcButtonIcon [disabled]="disabled">
    <rc-material-icon>home</rc-material-icon>
  </button>`,
})
class ButtonIconHostComponent {
  public disabled = false;
}

@Component({
  template: ` <button rcButton [disabled]="disabled">
    <rc-material-icon>home</rc-material-icon>
    Click me
  </button>`,
})
class ButtonWithIconHostComponent extends ButtonIconHostComponent {}

@Component({
  template: `<a rcButton [disabled]="disabled">
    <rc-material-icon>home</rc-material-icon>
    Click me
  </a>`,
})
class LinkWithIconHostComponent extends ButtonWithIconHostComponent {}

@Component({
  template: `<a rcButtonIcon [disabled]="disabled">
    <rc-material-icon>home</rc-material-icon>
  </a>`,
})
class LinkIconHostComponent extends ButtonIconHostComponent {}
