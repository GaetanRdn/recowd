import { Directive } from '@angular/core';

@Directive()
export abstract class FormFieldElementDirective {
  abstract get disabled(): boolean;

  abstract get focused(): boolean;

  abstract get required(): boolean;

  abstract get hasError(): boolean;

  public abstract onFormFieldClick(): void;
}
