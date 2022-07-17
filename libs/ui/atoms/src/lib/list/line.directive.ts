import { Directive } from '@angular/core';

@Directive({
  selector: '[rcLine], rc-line',
  host: {
    class: 'rc-line',
  },
})
export class LineDirective {}
