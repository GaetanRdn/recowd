import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { CardContentDirective } from './card-content.directive';
import { CardTitleDirective } from './card-title.directive';
import { CardSubtitleDirective } from './card-subtitle.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CardComponent,
    CardContentDirective,
    CardTitleDirective,
    CardSubtitleDirective,
  ],
  exports: [
    CardComponent,
    CardContentDirective,
    CardTitleDirective,
    CardSubtitleDirective,
  ],
  imports: [CommonModule],
})
export class CardModule {}
