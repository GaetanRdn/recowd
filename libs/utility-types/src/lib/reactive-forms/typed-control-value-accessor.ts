import { ControlValueAccessor } from '@angular/forms';

export interface TypedControlValueAccessor<ValueType>
  extends ControlValueAccessor {
  writeValue(value: ValueType): void;

  registerOnChange(fn: OnChangeFn<ValueType>): void;

  registerOnTouched(fn: OnTouchedFn): void;
}

export type OnTouchedFn = () => void;

export type OnChangeFn<ValueType> = (value: ValueType) => void;
