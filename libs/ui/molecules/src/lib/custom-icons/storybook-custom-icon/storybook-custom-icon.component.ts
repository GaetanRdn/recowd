import { Component } from '@angular/core';
import { CustomIconComponent } from '@recowd/ui-atoms';

@Component({
  selector: 'rc-storybook-custom-icon',
  standalone: true,
  imports: [CustomIconComponent],
  templateUrl: './storybook-custom-icon.component.html',
})
export class StorybookCustomIconComponent extends CustomIconComponent {
  public override readonly name = 'assets/images/storybook';
}
