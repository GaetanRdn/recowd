import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  AvatarDirective,
  ButtonDirective,
  MaterialIconDirective,
  ToolbarComponent,
} from '@recowd/ui-atoms';
import {
  ContactButtonIconComponent,
  EducationButtonWithIconComponent,
  ExperienceButtonWithIconComponent,
} from '@recowd/ui/molecules';

@Component({
  selector: 'rc-rw-toolbar',
  standalone: true,
  imports: [
    ToolbarComponent,
    AvatarDirective,
    ButtonDirective,
    MaterialIconDirective,
    ContactButtonIconComponent,
    EducationButtonWithIconComponent,
    ExperienceButtonWithIconComponent,
  ],
  templateUrl: './rw-toolbar.component.html',
  // styleUrls: ['./rw-toolbar-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RwToolbarComponent {}
