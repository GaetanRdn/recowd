import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonDirective, MaterialIconDirective } from '@recowd/ui-atoms';

@Component({
  selector: 'rc-experience-button-with-icon',
  standalone: true,
  imports: [ButtonDirective, MaterialIconDirective],
  templateUrl: './experience-button-with-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceButtonWithIconComponent {}
