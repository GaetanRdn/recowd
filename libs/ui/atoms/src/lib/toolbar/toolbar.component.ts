import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rc-toolbar',
  standalone: true,
  template: ` <ng-content></ng-content>`,
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {}
