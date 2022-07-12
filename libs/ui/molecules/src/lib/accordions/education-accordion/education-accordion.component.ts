import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from '@recowd/ui-atoms';

@Component({
  selector: 'rc-education-accordion',
  standalone: true,
  imports: [CommonModule, AccordionModule],
  templateUrl: './education-accordion.component.html',
  styleUrls: ['./education-accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationAccordionComponent {}
