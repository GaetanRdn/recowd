import { TestBed, waitForAsync } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormFieldComponent, FormFieldModule } from './form-field.component';
import { InputDirective } from '../input/input.directive';
import { TemplateLookup } from '@recowd/test/utils';
import { FormFieldElementDirective } from './form-field-element.directive';
import { CheckboxComponent } from '../checkbox/checkbox.component';

describe('FormFieldComponent', () => {
  beforeEach(waitForAsync(() =>
    TestBed.configureTestingModule({
      declarations: [HostWithInputComponent, HostWithCheckboxComponent],
      imports: [FormFieldModule, InputDirective, CheckboxComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()));

  describe('With input', () => {
    let templateLookup: TemplateLookup<HostWithInputComponent>;

    beforeEach(
      () => (templateLookup = new TemplateLookup(HostWithInputComponent))
    );

    it('should create With input', () => {
      templateLookup.detectChanges();
      expect(templateLookup.firstChildElement).toMatchSnapshot();
      expect(
        templateLookup.getComponent(FormFieldComponent).formFieldElement
      ).toEqual(templateLookup.getDirectiveOn('input', InputDirective));
    });

    it('should create With disabled input', () => {
      jest
        .spyOn(
          templateLookup.getComponent(FormFieldComponent)
            .formFieldElement as FormFieldElementDirective,
          'disabled',
          'get'
        )
        .mockReturnValue(true);
      templateLookup.detectChanges();
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });

    it('should known when input is focused', () => {
      templateLookup.query('input').focus();
      templateLookup.detectChanges();
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });

    it('should set the focus on input when click', () => {
      templateLookup.query('rc-form-field').click();
      templateLookup.detectChanges();
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });

    it('should be outlined', () => {
      templateLookup.hostComponent.outlined = true;
      templateLookup.detectChanges();
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });

    it('should be required', () => {
      jest
        .spyOn(
          templateLookup.getComponent(FormFieldComponent)
            .formFieldElement as FormFieldElementDirective,
          'required',
          'get'
        )
        .mockReturnValue(true);
      templateLookup.detectChanges();
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });

    it('should be in error', () => {
      jest
        .spyOn(
          templateLookup.getComponent(FormFieldComponent)
            .formFieldElement as FormFieldElementDirective,
          'hasError',
          'get'
        )
        .mockReturnValue(true);
      templateLookup.detectChanges();

      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });
  });

  describe('With checkbox', () => {
    let templateLookup: TemplateLookup<HostWithCheckboxComponent>;

    beforeEach(
      () => (templateLookup = new TemplateLookup(HostWithCheckboxComponent))
    );

    it('should create With disabled input', () => {
      jest
        .spyOn(
          templateLookup.getComponent(FormFieldComponent)
            .formFieldElement as FormFieldElementDirective,
          'disabled',
          'get'
        )
        .mockReturnValue(true);
      templateLookup.detectChanges();
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });

    it('should known when input is focused', () => {
      templateLookup.query('input').focus();
      templateLookup.detectChanges();
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });

    it('should set the focus on input when click', () => {
      templateLookup.query('rc-form-field').click();
      templateLookup.detectChanges();
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });

    it('should be outlined', () => {
      templateLookup.hostComponent.outlined = true;
      templateLookup.detectChanges();
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });

    it('should be required', () => {
      jest
        .spyOn(
          templateLookup.getComponent(FormFieldComponent)
            .formFieldElement as FormFieldElementDirective,
          'required',
          'get'
        )
        .mockReturnValue(true);
      templateLookup.detectChanges();
      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });

    it('should be in error', () => {
      jest
        .spyOn(
          templateLookup.getComponent(FormFieldComponent)
            .formFieldElement as FormFieldElementDirective,
          'hasError',
          'get'
        )
        .mockReturnValue(true);
      templateLookup.detectChanges();

      expect(templateLookup.firstChildElement).toMatchSnapshot();
    });
  });
});

@Component({
  template: ` <rc-form-field [outlined]="outlined">
    <rc-label>Field label</rc-label>
    <input rcInput />
  </rc-form-field>`,
})
class HostWithInputComponent {
  public outlined = false;
}

@Component({
  template: ` <rc-form-field [outlined]="outlined">
    <rc-label>Field label</rc-label>
    <rc-checkbox [value]="1"></rc-checkbox>
  </rc-form-field>`,
})
class HostWithCheckboxComponent {
  public outlined = false;
}
