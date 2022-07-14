import { Component } from '@angular/core';
import { CustomIconComponent } from '@recowd/ui-atoms';

@Component({
  selector: 'rc-sass-custom-icon',
  standalone: true,
  imports: [CustomIconComponent],
  templateUrl: './sass-custom-icon.component.html',
})
export class SassCustomIconComponent extends CustomIconComponent {
  public override readonly name = 'assets/images/sass';
}
