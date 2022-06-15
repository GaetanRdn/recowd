import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rc-label',
  standalone: true,
  template: ` <ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent {}
