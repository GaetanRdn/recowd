import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarDirective, CardModule } from '@recowd/ui-atoms';
import { Required } from '@recowd/utility-types';
import { Education } from '@recowd/models';

@Component({
  selector: 'rc-education-card',
  standalone: true,
  imports: [CommonModule, CardModule, AvatarDirective],
  templateUrl: './education-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationCardComponent {
  @Input() @Required() public education!: Education;
}
