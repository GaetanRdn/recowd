import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonDirective } from '@recowd/ui-atoms';
import { CbpCustomIconComponent } from '../../custom-icons/cbp-custom-icon/cbp-custom-icon.component';

@Component({
  selector: 'rc-cbp-link-icon',
  standalone: true,
  imports: [ButtonDirective, CbpCustomIconComponent],
  templateUrl: './cbp-link-icon.component.html',
  styleUrls: ['./cbp-link-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CbpLinkIconComponent {}
