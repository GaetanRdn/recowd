import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  NgModule,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BooleanInput,
  CoerceBoolean,
  Nullable,
  OnChangeFn,
  OnTouchedFn,
  TypedControlValueAccessor,
} from '@recowd/utility-types';
import { MaterialIconComponent } from '../../material-icon/material-icon.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormFieldElementDirective } from '../form-field/form-field-element.directive';

@Component({
  selector: 'rc-checkbox',
  host: {
    '[class.rc-label-before]': 'labelBefore',
    '[class.rc-disabled]': 'disabled',
  },
  templateUrl: './checkbox.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
    {
      provide: FormFieldElementDirective,
      useExisting: forwardRef(() => CheckboxComponent),
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent<ValueType>
  implements
    TypedControlValueAccessor<Nullable<ValueType>>,
    FormFieldElementDirective
{
  static ngAcceptInputType_labelBefore: BooleanInput;
  static ngAcceptInputType_checked: BooleanInput;
  static ngAcceptInputType_disabled: BooleanInput;
  static ngAcceptInputType_required: BooleanInput;
  static ngAcceptInputType_hasError: BooleanInput;

  @Input() @CoerceBoolean() public labelBefore = false;

  @Input() @CoerceBoolean() public checked = false;

  @Input() @CoerceBoolean() public required = false;

  @Input() @CoerceBoolean() public hasError = false;

  @Input() public value!: ValueType;

  @Output() public readonly checkedChange: EventEmitter<
    CheckboxComponent<ValueType>
  > = new EventEmitter<CheckboxComponent<ValueType>>();

  constructor(private readonly _cdr: ChangeDetectorRef) {}

  private _disabled = false;

  get disabled(): boolean {
    return this._disabled;
  }

  @Input() @CoerceBoolean() set disabled(disabled: boolean) {
    this._disabled = disabled;
  }

  get focused(): boolean {
    return false;
  }

  @HostListener('click', ['$event'])
  public toggle(event?: Event): void {
    if (!this.disabled) {
      event?.stopPropagation();
      event?.stopImmediatePropagation();

      this.checked = !this.checked;
      this.onChange(this.checked ? this.value : null);
      this.onTouched();
      this.checkedChange.emit(this);
    }
  }

  public registerOnChange(fn: OnChangeFn<Nullable<ValueType>>): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: OnTouchedFn): void {
    this.onTouched = fn;
  }

  public writeValue(value: Nullable<ValueType>): void {
    this.checked = !!value;
  }

  public setDisabledState(isDisabled: boolean): void {
    this._disabled = isDisabled;
    this._cdr.markForCheck();
  }

  public onFormFieldClick(): void {
    this.toggle();
  }

  private onChange: OnChangeFn<Nullable<ValueType>> = () => {
    // default method
  };

  private onTouched: OnTouchedFn = () => {
    // default method
  };
}

@NgModule({
  declarations: [CheckboxComponent],
  exports: [CheckboxComponent],
  imports: [CommonModule, MaterialIconComponent],
})
export class CheckboxModule {}
