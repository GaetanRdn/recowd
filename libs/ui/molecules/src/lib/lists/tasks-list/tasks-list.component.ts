import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListModule } from '@recowd/ui-atoms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'rc-tasks-list',
  standalone: true,
  imports: [CommonModule, ListModule, TranslateModule],
  template: ` <rc-list>
    <rc-list-title>{{ 'completed-tasks' | translate }}</rc-list-title>
    <rc-list-item *ngFor="let task of tasks">{{ task }}</rc-list-item>
  </rc-list>`,
  styleUrls: ['tasks-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListComponent {
  @Input() public tasks: string[] = [];
}
