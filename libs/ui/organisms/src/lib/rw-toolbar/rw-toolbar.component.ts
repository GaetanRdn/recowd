import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { ToolbarComponent } from '@recowd/ui-atoms';
import {
  ContactButtonIconComponent,
  EducationButtonWithIconComponent,
  ExperienceButtonWithIconComponent,
  RwAvatarComponent,
} from '@recowd/ui/molecules';

@Component({
  selector: 'rc-rw-toolbar',
  standalone: true,
  imports: [
    ToolbarComponent,
    RwAvatarComponent,
    ContactButtonIconComponent,
    EducationButtonWithIconComponent,
    ExperienceButtonWithIconComponent,
  ],
  templateUrl: './rw-toolbar.component.html',
  styleUrls: ['./rw-toolbar-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RwToolbarComponent {
  @Output() public readonly educationClick: EventEmitter<void> =
    new EventEmitter<void>();
  @Output() public readonly experienceClick: EventEmitter<void> =
    new EventEmitter<void>();
  @Output() public readonly contactClick: EventEmitter<void> =
    new EventEmitter<void>();
}
