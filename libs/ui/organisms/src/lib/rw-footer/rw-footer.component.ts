import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToolbarComponent } from '@recowd/ui-atoms';
import {
  AngularCustomIconComponent,
  CypressCustomIconComponent,
  JestCustomIconComponent,
  NxCustomIconComponent,
  SassCustomIconComponent,
  StorybookCustomIconComponent,
} from '@recowd/ui/molecules';

@Component({
  selector: 'rc-rw-footer',
  standalone: true,
  imports: [
    ToolbarComponent,
    NxCustomIconComponent,
    AngularCustomIconComponent,
    JestCustomIconComponent,
    CypressCustomIconComponent,
    SassCustomIconComponent,
    StorybookCustomIconComponent,
  ],
  templateUrl: './rw-footer.component.html',
  styleUrls: ['./rw-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RwFooterComponent {}
