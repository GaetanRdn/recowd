import { Directive, HostBinding, Input, NgModule } from '@angular/core';
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

@NgModule({
  declarations: [ButtonDirective],
  exports: [ButtonDirective],
})
export class ButtonModule {}
