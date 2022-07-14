import { Component } from '@angular/core';
import { CustomIconComponent } from '@recowd/ui-atoms';

@Component({
  selector: 'rc-jest-custom-icon',
  standalone: true,
  imports: [CustomIconComponent],
  templateUrl: './jest-custom-icon.component.html',
})
export class JestCustomIconComponent extends CustomIconComponent {
  public override readonly name = 'assets/images/jest';
}
