import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonDirective, MaterialIconDirective } from '@recowd/ui-atoms';

@Component({
  selector: 'rc-contact-button-icon',
  standalone: true,
  imports: [ButtonDirective, MaterialIconDirective],
  templateUrl: './contact-button-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactButtonIconComponent {}
