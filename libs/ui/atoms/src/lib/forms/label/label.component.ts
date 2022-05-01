import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'rc-label',
  template: ` <ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent {}

@NgModule({
  declarations: [LabelComponent],
  exports: [LabelComponent],
})
export class LabelModule {}
