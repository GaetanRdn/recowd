import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { CoerceBoolean } from '@recowd/utility-types';

@Directive({
  selector:
    'button[rcButtonIcon], a[rcButtonIcon], button[rcButton], a[rcButton]',
  standalone: true,
})
export class ButtonDirective {
  @Input() @CoerceBoolean() @HostBinding('class.rc-disabled') disabled = false;

  constructor(private readonly _elementRef: ElementRef<HTMLElement>) {}

  @HostBinding('class.rc-button-icon')
  get isButtonIcon(): boolean {
    return this.hostElement().getAttributeNames().includes('rcbuttonicon');
  }

  @HostBinding('class.rc-button')
  get isButton(): boolean {
    return this.hostElement().getAttributeNames().includes('rcbutton');
  }

  private hostElement(): HTMLElement {
    return this._elementRef.nativeElement;
  }
}
