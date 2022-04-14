import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  NgModule,
  Output,
} from '@angular/core';
import { CoerceBoolean } from '@recowd/utility-types';

@Directive({
  selector: 'input[rcInput]',
  host: {
    class: 'rc-input',
    '[class.rc-outlined]': 'outlined',
  },
})
export class InputDirective {
  @Input() @CoerceBoolean() public outlined?: boolean;

  @Input()
  @CoerceBoolean()
  @HostBinding('disabled')
  public disabled?: boolean;

  @Output()
  public readonly valueChange: EventEmitter<string> = new EventEmitter<string>();

  @HostListener('input', ['$event.target.value'])
  private input(value: string): void {
    this.valueChange.emit(value);
  }
}

@NgModule({
  declarations: [InputDirective],
  exports: [InputDirective],
})
export class InputModule {}
