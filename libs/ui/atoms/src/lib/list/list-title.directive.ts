import { Directive } from '@angular/core';

@Directive({
  selector: '[rcListTitle], rc-list-title',
  host: {
    class: 'rc-list-title',
  },
})
export class ListTitleDirective {}
