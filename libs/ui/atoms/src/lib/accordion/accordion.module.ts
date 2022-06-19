import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionBlocDirective } from './accordion-bloc.directive';
import { AccordionBlocHeaderComponent } from './accordion-bloc-header.component';
import { AccordionBlocContentComponent } from './accordion-bloc-content.component';

@NgModule({
  declarations: [AccordionComponent],
  exports: [
    AccordionComponent,
    AccordionBlocDirective,
    AccordionBlocHeaderComponent,
    AccordionBlocContentComponent,
  ],
  imports: [
    CommonModule,
    AccordionBlocDirective,
    AccordionBlocHeaderComponent,
    AccordionBlocContentComponent,
  ],
})
export class AccordionModule {}
