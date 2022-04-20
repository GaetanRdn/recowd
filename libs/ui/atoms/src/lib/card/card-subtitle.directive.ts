import { Directive } from '@angular/core';

@Directive({
  selector: '[rcCardSubtitle], rc-card-subtitle',
  host: { class: 'rc-card-subtitle ' },
})
export class CardSubtitleDirective {}
