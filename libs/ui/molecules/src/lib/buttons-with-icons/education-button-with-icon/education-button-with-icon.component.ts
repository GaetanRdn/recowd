import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonDirective, MaterialIconDirective } from '@recowd/ui-atoms';

@Component({
  selector: 'rc-education-button-with-icon',
  standalone: true,
  imports: [ButtonDirective, MaterialIconDirective],
  templateUrl: './education-button-with-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationButtonWithIconComponent {}
