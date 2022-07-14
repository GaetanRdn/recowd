import { Component } from '@angular/core';
import { CustomIconComponent } from '@recowd/ui-atoms';

@Component({
  selector: 'rc-nx-custom-icon',
  standalone: true,
  imports: [CustomIconComponent],
  templateUrl: './nx-custom-icon.component.html',
})
export class NxCustomIconComponent extends CustomIconComponent {
  public override readonly name = 'assets/images/nx';
}
