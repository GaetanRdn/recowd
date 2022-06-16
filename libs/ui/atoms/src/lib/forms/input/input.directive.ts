import {
  Directive,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  Optional,
  Output,
} from '@angular/core';
import {
  BooleanInput,
  CoerceBoolean,
  CoerceString,
  Nullable,
  OnChangeFn,
  OnTouchedFn,
  TypedControlValueAccessor,
} from '@recowd/utility-types';
import { NgControl, Validators } from '@angular/forms';
import { FormFieldElementDirective } from '../form-field/form-field-element.directive';

@Directive({
  selector: 'input[rcInput]',
  standalone: true,
  host: {
    class: 'rc-input',
  },
  providers: [
    {
      provide: FormFieldElementDirective,
      useExisting: forwardRef(() => InputDirective),
    },
  ],
})
export class InputDirective
  extends FormFieldElementDirective
  implements TypedControlValueAccessor<Nullable<string>>
{
  static ngAcceptInputType_disabled: BooleanInput;
  static ngAcceptInputType_required: BooleanInput;

  @HostBinding('value')
  @CoerceString()
  @Input()
  public value = '';

  @Output()
  public readonly valueChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private readonly _elementRef: ElementRef<HTMLInputElement>,
    @Optional() private readonly _ngControl?: NgControl
  ) {
    super();

    if (_ngControl) {
      _ngControl.valueAccessor = this;
    }
  }

  private _disabled = false;

  override get disabled(): boolean {
    return this._disabled || Boolean(this._ngControl?.disabled);
  }

  @Input()
  @CoerceBoolean()
  @HostBinding('disabled')
  override set disabled(disabled: boolean) {
    this._disabled = disabled;
  }

  private _required = false;

  override get required(): boolean {
    return (
      this._required ||
      Boolean(this._ngControl?.control?.hasValidator(Validators.required))
    );
  }

  @Input()
  @CoerceBoolean()
  @HostBinding('required')
  override set required(required: boolean) {
    this._required = required;
  }

  private _focused = false;

  override get focused(): boolean {
    return this._focused;
  }

  @HostListener('focus', ['true'])
  @HostListener('blur', ['false'])
  private toggleFocused(focused: boolean): void {
    this._focused = focused;
  }

  override get hasError(): boolean {
    return (
      Boolean(this._ngControl?.errors) && Boolean(this._ngControl?.touched)
    );
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

  public override onFormFieldClick(): void {
    this._elementRef.nativeElement.focus();
  }
}
