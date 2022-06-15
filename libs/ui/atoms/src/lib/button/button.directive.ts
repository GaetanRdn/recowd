import { Directive, HostBinding, Input } from '@angular/core';
import { CoerceBoolean } from '@recowd/utility-types';

@Directive({
  selector: 'button[rcButtonIcon], a[rcButtonIcon]',
  standalone: true,
  host: {
    '[class.rc-button-icon]': 'true',
  },
})
export class ButtonDirective {
  @Input() @CoerceBoolean() @HostBinding('class.rc-disabled') disabled = false;
}
