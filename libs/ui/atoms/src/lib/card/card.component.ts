import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rc-card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {}
