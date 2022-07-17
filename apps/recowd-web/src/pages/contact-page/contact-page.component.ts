import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WorkInProgressCardComponent } from '@recowd/ui/molecules';

@Component({
  selector: 'rc-contact-page',
  standalone: true,
  imports: [WorkInProgressCardComponent],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPageComponent {}
