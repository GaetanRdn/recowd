import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  NgModule,
  OnChanges,
  Output,
} from '@angular/core';
import { MaterialIconModule } from '../../material-icon/material-icon.component';
import { CommonModule } from '@angular/common';
import { BooleanInput, CoerceBoolean, NgChanges } from '@recowd/utility-types';
import { zoomAnimation } from '@recowd/ui-animations';

@Component({
  selector: 'rc-rate',
  host: {
    '[class.rc-disabled]': 'disabled',
  },
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [zoomAnimation],
})
export class RateComponent implements OnChanges {
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
    }
  }
}

@NgModule({
  declarations: [RateComponent],
  exports: [RateComponent],
  imports: [MaterialIconModule, CommonModule],
})
export class RateModule {}
