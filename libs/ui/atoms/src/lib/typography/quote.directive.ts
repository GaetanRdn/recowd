import { Directive } from '@angular/core';

@Directive({
  selector: '[rcQuote], rc-quote',
  standalone: true,
  host: {
    class: 'rc-quote',
  },
})
export class QuoteDirective {}
