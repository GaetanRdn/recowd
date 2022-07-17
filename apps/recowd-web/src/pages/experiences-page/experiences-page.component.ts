import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WorkInProgressCardComponent } from '@recowd/ui/molecules';

@Component({
  selector: 'rc-experiences-page',
  standalone: true,
  imports: [WorkInProgressCardComponent],
  templateUrl: './experiences-page.component.html',
  styleUrls: ['./experiences-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencesPageComponent {}
