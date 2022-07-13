import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationCardComponent } from '@recowd/ui/molecules';
import { Education } from '@recowd/models';

@Component({
  selector: 'rc-education-cards-list',
  standalone: true,
  imports: [CommonModule, EducationCardComponent],
  templateUrl: './education-cards-list.component.html',
  styleUrls: ['./education-cards-list.component.scss'],
})
export class EducationCardsListComponent {
  @Input() public educations: Education[] = [];
}
