import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomIconComponent } from '@recowd/ui-atoms';

@Component({
  selector: 'rc-norsys-custom-icon',
  standalone: true,
  imports: [CustomIconComponent],
  templateUrl: './norsys-custom-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NorsysCustomIconComponent extends CustomIconComponent {
  public override readonly name = 'assets/images/norsys';
}
