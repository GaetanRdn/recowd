import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[rcHost]',
  standalone: true,
})
export class PartnerHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
