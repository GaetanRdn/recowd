import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from '@recowd/ui-atoms';
import { WorkInProgressIconComponent } from '../../material-icons/work-in-progress-icon/work-in-progress-icon.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'rc-work-in-progress-card',
  standalone: true,
  imports: [CardModule, WorkInProgressIconComponent, TranslateModule],
  templateUrl: './work-in-progress-card.component.html',
  styleUrls: ['./work-in-progress-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkInProgressCardComponent {}
