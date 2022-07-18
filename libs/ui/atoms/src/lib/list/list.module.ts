import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemDirective } from './list-item.directive';
import { ListComponent } from './list.component';
import { ListTitleDirective } from './list-title.directive';
import { LineDirective } from './line.directive';

@NgModule({
  declarations: [
    ListComponent,
    ListItemDirective,
    ListTitleDirective,
    LineDirective,
  ],
  exports: [
    ListComponent,
    ListItemDirective,
    ListTitleDirective,
    LineDirective,
  ],
  imports: [CommonModule],
})
export class ListModule {}
