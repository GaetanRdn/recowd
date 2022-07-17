import { Directive } from '@angular/core';

@Directive({
  selector: '[rcListItem], rc-list-item',
  host: {
    role: 'list-item',
    class: 'rc-list-item',
  },
})
export class ListItemDirective {}
