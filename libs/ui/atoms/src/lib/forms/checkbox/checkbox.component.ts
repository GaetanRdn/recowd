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
import { MaterialIconModule } from '../../material-icon/material-icon.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent<ValueType>
  implements TypedControlValueAccessor<Nullable<ValueType>>
{
  static ngAcceptInputType_labelBefore: BooleanInput;
  static ngAcceptInputType_checked: BooleanInput;
  static ngAcceptInputType_disabled: BooleanInput;

  @Input() @CoerceBoolean() public labelBefore = false;

  @Input() @CoerceBoolean() public checked = false;
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

  @HostListener('click')
  public toggle(): void {
    if (!this.disabled) {
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
  imports: [CommonModule, MaterialIconModule],
})
export class CheckboxModule {}
