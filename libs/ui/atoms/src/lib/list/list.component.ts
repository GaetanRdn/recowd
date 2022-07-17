import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'rc-list',
  host: {
    role: 'list',
    '[class.rc-horizontal]': 'horizontal',
  },
  template: ` <ng-content select="[rcListItem], rc-list-item"></ng-content>`,
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input() public horizontal = false;
}
