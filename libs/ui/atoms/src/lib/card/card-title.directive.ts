import { Directive } from '@angular/core';

@Directive({
  selector: '[rcCardTitle], rc-card-title',
  host: { class: 'rc-card-title ' },
})
export class CardTitleDirective {}
