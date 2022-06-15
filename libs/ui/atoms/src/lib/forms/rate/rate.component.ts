import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { MaterialIconModule } from '../../material-icon/material-icon.component';
import { CommonModule } from '@angular/common';
import {
  BooleanInput,
  CoerceBoolean,
  NgChanges,
  OnChangeFn,
  OnTouchedFn,
  TypedControlValueAccessor,
} from '@recowd/utility-types';
import { zoomAnimation } from '@recowd/ui-animations';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'rc-rate',
  standalone: true,
  imports: [MaterialIconModule, CommonModule],
  host: {
    '[class.rc-disabled]': 'disabled',
  },
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RateComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [zoomAnimation],
})
export class RateComponent
  implements OnChanges, TypedControlValueAccessor<number>
{
  static ngAcceptInputType_disabled: BooleanInput;

  @Input() public nbStars = 1;

  @Input() public value = 0;

  @Input() @CoerceBoolean() public disabled = false;

  @Output() public readonly valueChange: EventEmitter<number> =
    new EventEmitter<number>();

  get range(): number[] {
    return Array.from(Array(this.nbStars).keys()).map((nb: number) => nb + 1);
  }

  public ngOnChanges(changes: NgChanges<RateComponent>): void {
    if (changes.nbStars && changes.nbStars.currentValue === 0) {
      throw new Error('this nbStars should be > 0');
    }
    if (
      changes.value &&
      (changes.value.currentValue < 0 ||
        changes.value.currentValue > this.nbStars)
    ) {
      throw new Error(`this value is out of range [0, ${this.nbStars}]`);
    }
  }

  public setValue(nb: number): void {
    if (!this.disabled) {
      if (this.value !== nb) {
        this.value = nb;
      } else {
        this.value = 0;
      }
      this.valueChange.emit(this.value);
      this.onChange(this.value);
      this.onTouched();
    }
  }

  public registerOnChange(fn: OnChangeFn<number>): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: OnTouchedFn): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public writeValue(value: number): void {
    this.value = value;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange: OnChangeFn<number> = () => {};

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onTouched: OnTouchedFn = () => {};
}
