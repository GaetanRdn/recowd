import { TestBed, waitForAsync } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormFieldComponent, FormFieldModule } from './form-field.component';
import { InputDirective, InputModule } from '../input/input.directive';
import { TemplateLookup } from '@recowd/test/utils';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldElementDirective } from './form-field-element.directive';

describe('FormFieldComponent', () => {
  beforeEach(waitForAsync(() =>
    TestBed.configureTestingModule({
      declarations: [HostWithInputComponent],
      imports: [FormFieldModule, InputModule, ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()));

  it('should create With input', () => {
    const templateLookup: TemplateLookup<HostWithInputComponent> =
      new TemplateLookup(HostWithInputComponent);
    templateLookup.detectChanges();
    expect(templateLookup.firstChildElement).toMatchSnapshot();
    expect(
      templateLookup.getComponent(FormFieldComponent).formFieldElement
    ).toEqual(templateLookup.getDirectiveOn('input', InputDirective));
  });

  it('should create With disabled input', () => {
    const templateLookup: TemplateLookup<HostWithInputComponent> =
      new TemplateLookup(HostWithInputComponent);
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
    const templateLookup: TemplateLookup<HostWithInputComponent> =
      new TemplateLookup(HostWithInputComponent);
    templateLookup.query('input').focus();
    templateLookup.detectChanges();
    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });

  it('should set the focus on input when click', () => {
    const templateLookup: TemplateLookup<HostWithInputComponent> =
      new TemplateLookup(HostWithInputComponent);
    templateLookup.query('rc-form-field').click();
    templateLookup.detectChanges();
    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });

  it('should be outlined', () => {
    const templateLookup: TemplateLookup<HostWithInputComponent> =
      new TemplateLookup(HostWithInputComponent);
    templateLookup.hostComponent.outlined = true;
    templateLookup.detectChanges();
    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });

  it('should be required', () => {
    const templateLookup: TemplateLookup<HostWithInputComponent> =
      new TemplateLookup(HostWithInputComponent);
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
    const templateLookup: TemplateLookup<HostWithInputComponent> =
      new TemplateLookup(HostWithInputComponent);
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

@Component({
  template: ` <rc-form-field [outlined]="outlined">
    <rc-label>Field label</rc-label>
    <input rcInput />
  </rc-form-field>`,
})
class HostWithInputComponent {
  public outlined = false;
}
