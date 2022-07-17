import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BooleanInput, CoerceBoolean } from '@recowd/utility-types';

@Component({
  selector: 'rc-list',
  host: {
    role: 'list',
    '[class.rc-horizontal]': 'horizontal',
  },
  template: ` <ng-content select="[rcListTitle], rc-list-title"></ng-content>
    <span class="rc-list-items-wrapper">
      <ng-content select="[rcListItem], rc-list-item"></ng-content>
    </span>`,
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  static ngAcceptInputType_horizontal: BooleanInput;

  @Input() @CoerceBoolean() public horizontal = false;
}
