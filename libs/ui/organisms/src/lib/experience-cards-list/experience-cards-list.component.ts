import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '@recowd/models';
import { ExperienceCardComponent } from '@recowd/ui/molecules';

@Component({
  selector: 'rc-experience-cards-list',
  standalone: true,
  imports: [CommonModule, ExperienceCardComponent],
  template: `
    <rc-experience-card
      *ngFor="let experience of experiences"
      [experience]="experience"
    >
    </rc-experience-card>
  `,
  styleUrls: ['./experience-cards-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceCardsListComponent {
  @Input() public experiences: Experience[] = [];
}
