import { Directive } from '@angular/core';

@Directive({
  selector: '[rcCardContent], rc-card-content',
  host: { class: 'rc-card-content ' },
})
export class CardContentDirective {}
