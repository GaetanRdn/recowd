import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonDirective } from '@recowd/ui-atoms';
import { TranslateModule } from '@ngx-translate/core';
import { PartnerIconComponent } from '../../material-icons/partner-icon/partner-icon.component';

@Component({
  selector: 'rc-partners-button-with-icon',
  standalone: true,
  imports: [ButtonDirective, PartnerIconComponent, TranslateModule],
  template: `<a rcButton role="button">
    <rc-partner-icon></rc-partner-icon>
    {{ 'partners' | translate }}
  </a>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnersButtonWithIconComponent {}
