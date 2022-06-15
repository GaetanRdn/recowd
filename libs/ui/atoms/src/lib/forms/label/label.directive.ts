import { Directive } from '@angular/core';

@Directive({
  selector: 'rc-label, [rcLabel]',
  standalone: true,
})
export class LabelDirective {}
