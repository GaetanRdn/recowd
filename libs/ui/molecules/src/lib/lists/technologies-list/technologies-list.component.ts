import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListModule } from '@recowd/ui-atoms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'rc-technologies-list',
  standalone: true,
  imports: [CommonModule, ListModule, TranslateModule],
  template: ` <rc-list horizontal>
    <rc-list-title>{{ 'technologies' | translate }}</rc-list-title>
    <rc-list-item *ngFor="let techno of technologies">{{
      techno
    }}</rc-list-item>
  </rc-list>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologiesListComponent {
  @Input() public technologies: string[] = [];
}
