import { Component } from '@angular/core';
import { CustomIconComponent } from '@recowd/ui-atoms';

@Component({
  selector: 'rc-angular-custom-icon',
  standalone: true,
  imports: [CustomIconComponent],
  templateUrl: './angular-custom-icon.component.html',
})
export class AngularCustomIconComponent extends CustomIconComponent {
  public override readonly name = 'assets/images/angular';
}
