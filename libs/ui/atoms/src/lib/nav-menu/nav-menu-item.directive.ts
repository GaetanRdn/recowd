import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[rcNavMenuItem], rc-nav-menu-item',
  host: { class: 'rc-nav-menu-item', '[class.rc-selected]': 'selected' },
})
export class NavMenuItemDirective {
  public selected = false;

  @Output()
  public readonly selectionChange: EventEmitter<NavMenuItemDirective> = new EventEmitter<NavMenuItemDirective>();

  @HostListener('click')
  private click(): void {
    this.selected = true;
    this.selectionChange.emit(this);
  }
}
