import { Component, HostBinding } from '@angular/core';
import { collapsable } from '@recowd/ui-animations';

@Component({
  selector: 'rc-accordion-bloc-content',
  standalone: true,
  template: ` <span class="rc-accordion-bloc-content-wrapper"
    ><ng-content></ng-content
  ></span>`,
  animations: [collapsable],
})
export class AccordionBlocContentComponent {
  @HostBinding('class.rc-collapsed') public collapsed = true;

  @HostBinding('@collapsable') get collapsable(): 'collapsed' | 'expanded' {
    return this.collapsed ? 'collapsed' : 'expanded';
  }
}
