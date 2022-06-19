import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { MaterialIconDirective } from '../material-icon/material-icon.directive';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AutoUnsubscribe } from '@recowd/utility-types';

@Component({
  selector: 'rc-accordion-bloc-header',
  host: {
    class: 'rc-accordion-bloc-header', // TODO remove
  },
  standalone: true,
  imports: [MaterialIconDirective],
  template: ` <ng-content></ng-content>
    <rc-material-icon [@rotate]="selected ? 'up' : 'down'">
      expand_more
    </rc-material-icon>`,
  animations: [
    trigger('rotate', [
      state(
        'up',
        style({
          transform: 'rotate(-180deg)',
        })
      ),
      state(
        'down',
        style({
          transform: 'rotate(0)',
        })
      ),
      transition('up <=> down', [
        animate('0.4s cubic-bezier(0.35, 0, 0.25, 1)'),
      ]),
    ]),
  ],
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
