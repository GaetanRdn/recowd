import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TrackByFunction,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Role } from '@recowd/models';
import { ListModule } from '@recowd/ui-atoms';
import { FromToDatePipeModule } from '@recowd/pipes';

@Component({
  selector: 'rc-roles-list',
  standalone: true,
  imports: [CommonModule, ListModule, FromToDatePipeModule],
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RolesListComponent {
  @Input() public roles: Role[] = [];

  protected trackByFn: TrackByFunction<Role> = (_: number, role: Role) =>
    role.titre + role.startDate;
}
