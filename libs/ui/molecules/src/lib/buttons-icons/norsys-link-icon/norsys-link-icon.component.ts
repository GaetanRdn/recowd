import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonDirective } from '@recowd/ui-atoms';
import { NorsysCustomIconComponent } from '../../custom-icons/norsys-custom-icon/norsys-custom-icon.component';

@Component({
  selector: 'rc-norsys-link-icon',
  standalone: true,
  imports: [ButtonDirective, NorsysCustomIconComponent],
  templateUrl: './norsys-link-icon.component.html',
  styleUrls: ['./norsys-link-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NorsysLinkIconComponent {}
