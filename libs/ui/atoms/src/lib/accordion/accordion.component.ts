import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rc-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {}
