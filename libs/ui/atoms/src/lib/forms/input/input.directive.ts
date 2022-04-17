import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  NgModule,
  Optional,
  Output,
} from '@angular/core';
import {
  CoerceBoolean,
  CoerceString,
  Nullable,
  OnChangeFn,
  OnTouchedFn,
  TypedControlValueAccessor,
} from '@recowd/utility-types';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input[rcInput]',
  host: {
    class: 'rc-input',
    '[class.rc-outlined]': 'outlined',
  },
})
export class InputDirective
  implements TypedControlValueAccessor<Nullable<string>>
{
  @Input() @CoerceBoolean() public outlined?: boolean;

  @HostBinding('value')
  @CoerceString()
  @Input()
  public value = '';

  @Output()
  public readonly valueChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(@Optional() private readonly _ngControl?: NgControl) {
    if (_ngControl) {
      _ngControl.valueAccessor = this;
    }
  }

  private _disabled = false;

  get disabled(): boolean {
    return this._disabled || Boolean(this._ngControl?.disabled);
  }

  @Input()
  @CoerceBoolean()
  @HostBinding('disabled')
  set disabled(disabled: boolean) {
    this._disabled = disabled;
  }

  public writeValue(value: Nullable<string>): void {
    this.value = value ?? '';
  }

  public registerOnChange(fn: OnChangeFn<Nullable<string>>): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: OnTouchedFn): void {
    this.onTouched = fn;
  }

  @HostListener('input', ['$event.target.value'])
  private input(value: string): void {
    this.valueChange.emit(value);
    this.onTouched();
    this.onChange(value);
  }

  private onTouched: OnTouchedFn = () => {
    // default method if the directive is not used in a reactive form
  };

  private onChange: OnChangeFn<Nullable<string>> = () => {
    // default method if the directive is not used in a reactive form
  };
}

@NgModule({
  declarations: [InputDirective],
  exports: [InputDirective],
})
export class InputModule {}
