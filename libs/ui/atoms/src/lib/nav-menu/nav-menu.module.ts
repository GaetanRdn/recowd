import { NgModule } from '@angular/core';
import { NavMenuComponent } from './nav-menu.component';
import { NavMenuItemDirective } from './nav-menu-item.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [NavMenuComponent, NavMenuItemDirective],
  declarations: [NavMenuComponent, NavMenuItemDirective],
  imports: [CommonModule],
})
export class NavMenuModule {}
