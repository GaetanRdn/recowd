import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MaterialIconDirective } from '@recowd/ui-atoms';

@Component({
  selector: 'rc-partner-icon',
  standalone: true,
  imports: [MaterialIconDirective],
  template: ` <rc-material-icon type="outlined">handshake</rc-material-icon>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnerIconComponent {}
