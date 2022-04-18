import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'rc-toolbar',
  template: ` <ng-content></ng-content>`,
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {}

@NgModule({
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
