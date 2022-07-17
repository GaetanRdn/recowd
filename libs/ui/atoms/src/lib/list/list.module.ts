import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemDirective } from './list-item.directive';
import { ListComponent } from './list.component';
import { ListTitleDirective } from './list-title.directive';

@NgModule({
  declarations: [ListComponent, ListItemDirective, ListTitleDirective],
  exports: [ListComponent, ListItemDirective, ListTitleDirective],
  imports: [CommonModule],
})
export class ListModule {}
