import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { MaterialIconDirective } from '../material-icon/material-icon.directive';
import { AutoUnsubscribe } from '@recowd/utility-types';
import { rotation180Animation } from '@recowd/ui-animations';

@Component({
  selector: 'rc-accordion-bloc-header',
  host: {
    class: 'rc-accordion-bloc-header', // TODO remove
  },
  standalone: true,
  imports: [MaterialIconDirective],
  template: ` <ng-content></ng-content>
    <rc-material-icon [@rotate]="selected ? 'rotated' : 'default'">
      expand_more
    </rc-material-icon>`,
  animations: [rotation180Animation],
})
@AutoUnsubscribe()
export class AccordionBlocHeaderComponent {
  public selected = false;

  @Output() public readonly selectChange: EventEmitter<void> =
    new EventEmitter<void>();

  @HostListener('click')
  private click(): void {
    this.selectChange.emit();
    this.selected = !this.selected;
  }
}
