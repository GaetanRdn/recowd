import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  HostListener,
  Input,
  NgModule,
} from '@angular/core';
import { LabelModule } from '../label/label.component';
import { FormFieldElementDirective } from './form-field-element.directive';
import { CoerceBoolean } from '@recowd/utility-types';

@Component({
  selector: 'rc-form-field',
  host: {
    '[class.rc-disabled]': 'disabled',
    '[class.rc-focused]': 'focused',
    '[class.rc-outlined]': 'outlined',
    '[class.rc-required]': 'required',
    '[class.rc-error]': 'hasError',
  },
  templateUrl: 'form-field.component.html',
  styleUrls: ['form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent {
  @ContentChild(FormFieldElementDirective, { static: true })
  public readonly formFieldElement?: FormFieldElementDirective;

  @Input() @CoerceBoolean() public outlined = false;

  get disabled(): boolean {
    return Boolean(this.formFieldElement?.disabled);
  }

  get focused(): boolean {
    return Boolean(this.formFieldElement?.focused);
  }

  get required(): boolean {
    return Boolean(this.formFieldElement?.required);
  }

  get hasError(): boolean {
    return Boolean(this.formFieldElement?.hasError);
  }

  constructor(private readonly _cdr: ChangeDetectorRef) {}

  @HostListener('click')
  private onClick(): void {
    this.formFieldElement?.onFormFieldClick();
    this._cdr.markForCheck();
  }
}

@NgModule({
  declarations: [FormFieldComponent],
  exports: [FormFieldComponent, LabelModule],
})
export class FormFieldModule {}