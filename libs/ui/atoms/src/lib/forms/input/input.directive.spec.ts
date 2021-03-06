import { Component } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { InputDirective } from './input.directive';
import { TemplateLookup } from '@recowd/test/utils';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

describe('InputDirective', () => {
  beforeEach(waitForAsync(() =>
    TestBed.configureTestingModule({
      declarations: [
        DefaultHostComponent,
        DisabledHostComponent,
        ReactiveFormHostComponent,
      ],
      imports: [ReactiveFormsModule, InputDirective],
    }).compileComponents()));

  it('should create default', () => {
    // WHEN
    const templateLookup: TemplateLookup<DefaultHostComponent> =
      new TemplateLookup(DefaultHostComponent);
    templateLookup.detectChanges();

    // THEN
    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });

  it('should emit valueChange on input', () => {
    // GIVEN
    const templateLookup: TemplateLookup<DefaultHostComponent> =
      new TemplateLookup(DefaultHostComponent);
    templateLookup.detectChanges();

    // WHEN
    templateLookup.triggerInput('input', 'test');
    templateLookup.detectChanges();

    // THEN
    expect(templateLookup.firstChildElement).toMatchSnapshot();
    expect(templateLookup.hostComponent.value).toEqual('test');
  });

  it('should create disabled', () => {
    // WHEN
    const templateLookup: TemplateLookup<DisabledHostComponent> =
      new TemplateLookup(DisabledHostComponent);
    templateLookup.detectChanges();

    // THEN
    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });

  it('should create with form control', () => {
    // WHEN
    const templateLookup: TemplateLookup<ReactiveFormHostComponent> =
      new TemplateLookup(ReactiveFormHostComponent);
    templateLookup.detectChanges();

    // THEN
    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });

  it('should set value with form control value', () => {
    // WHEN
    const templateLookup: TemplateLookup<ReactiveFormHostComponent> =
      new TemplateLookup(ReactiveFormHostComponent);
    templateLookup.hostComponent.fc.setValue('value');
    templateLookup.detectChanges();

    // THEN
    expect(templateLookup.firstChildElement).toMatchSnapshot();
    expect(
      templateLookup.getDirectiveOn('input', InputDirective).value
    ).toEqual('value');
  });

  it('should update control on input', () => {
    // GIVEN
    const templateLookup: TemplateLookup<ReactiveFormHostComponent> =
      new TemplateLookup(ReactiveFormHostComponent);
    templateLookup.detectChanges();

    // WHEN
    templateLookup.triggerInput('input', 'test');
    templateLookup.detectChanges();

    // THEN
    expect(templateLookup.firstChildElement).toMatchSnapshot();
    expect(templateLookup.hostComponent.fc.value).toEqual('test');
  });

  it('should be disabled when control is disabled', () => {
    // WHEN
    const templateLookup: TemplateLookup<ReactiveFormHostComponent> =
      new TemplateLookup(ReactiveFormHostComponent);
    templateLookup.hostComponent.fc.disable();
    templateLookup.detectChanges();

    // THEN
    expect(templateLookup.firstChildElement).toMatchSnapshot();
  });

  it('should be in error', () => {
    const templateLookup: TemplateLookup<ReactiveFormHostComponent> =
      new TemplateLookup(ReactiveFormHostComponent);
    templateLookup.hostComponent.fc.setValidators(Validators.required);
    templateLookup.detectChanges();

    templateLookup.triggerInput('input', '');
    templateLookup.hostComponent.fc.markAsTouched();
    templateLookup.detectChanges();

    expect(templateLookup.firstChildElement).toMatchSnapshot();
    expect(
      templateLookup.getDirectiveOn('input', InputDirective).hasError
    ).toEqual(true);
  });
});

@Component({
  template: `<input rcInput [(value)]="value" />`,
})
class DefaultHostComponent {
  public value?: string;
}

@Component({
  template: `<input rcInput disabled />`,
})
class DisabledHostComponent {}

@Component({
  template: `<input rcInput [formControl]="fc" />`,
})
class ReactiveFormHostComponent {
  public readonly fc: FormControl = new FormControl();
}
