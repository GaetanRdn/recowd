import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomIconComponent } from '@recowd/ui-atoms';

@Component({
  selector: 'rc-cypress-custom-icon',
  standalone: true,
  imports: [CustomIconComponent],
  templateUrl: './cypress-custom-icon.component.html',
  styleUrls: ['./cypress-custom-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CypressCustomIconComponent extends CustomIconComponent {
  public override readonly name = 'cypress';
}
