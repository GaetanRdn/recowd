import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemDirective } from './list-item.directive';
import { ListComponent } from './list.component';

@NgModule({
  declarations: [ListComponent, ListItemDirective],
  exports: [ListComponent, ListItemDirective],
  imports: [CommonModule],
})
export class ListModule {}
