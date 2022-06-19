import { Component, HostBinding } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'rc-accordion-bloc-content',
  standalone: true,
  template: ` <span class="rc-accordion-bloc-content-wrapper"
    ><ng-content></ng-content
  ></span>`,
  animations: [
    trigger('collapsable', [
      state(
        'collapsed',
        style({
          height: '0',
          opacity: 0.5,
        })
      ),
      state(
        'expanded',
        style({
          height: '*',
          opacity: 1,
        })
      ),
      transition('collapsed <=> expanded', [
        animate('0.4s cubic-bezier(0.35, 0, 0.25, 1)'),
      ]),
    ]),
  ],
})
export class AccordionBlocContentComponent {
  @HostBinding('class.rc-collapsed') public collapsed = true;

  @HostBinding('@collapsable') get collapsable(): 'collapsed' | 'expanded' {
    return this.collapsed ? 'collapsed' : 'expanded';
  }
}
