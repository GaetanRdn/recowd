import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MaterialIconDirective } from '@recowd/ui-atoms';

@Component({
  selector: 'rc-work-in-progress-icon',
  standalone: true,
  imports: [MaterialIconDirective],
  template: ` <rc-material-icon type="outlined">engineering</rc-material-icon>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkInProgressIconComponent {}
