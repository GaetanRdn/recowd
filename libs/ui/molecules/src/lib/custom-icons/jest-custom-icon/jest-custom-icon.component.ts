import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomIconComponent } from '@recowd/ui-atoms';

@Component({
  selector: 'rc-jest-custom-icon',
  standalone: true,
  imports: [CustomIconComponent],
  templateUrl: './jest-custom-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JestCustomIconComponent extends CustomIconComponent {
  public override readonly name = 'jest';
}
