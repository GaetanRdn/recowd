import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AccordionModule, CardModule, QuoteDirective } from '@recowd/ui-atoms';
import { Experience, Role } from '@recowd/models';
import { Nullable, Required } from '@recowd/utility-types';
import { ExperienceDurationPipe } from '@recowd/pipes';
import { CommonModule } from '@angular/common';
import { RolesListComponent } from '../../lists/roles-list/roles-list.component';
import { TechnologiesListComponent } from '../../lists/technologies-list/technologies-list.component';
import { TasksListComponent } from '../../lists/tasks-list/tasks-list.component';

@Component({
  selector: 'rc-experience-card',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    AccordionModule,
    ExperienceDurationPipe,
    QuoteDirective,
    RolesListComponent,
    TechnologiesListComponent,
    TasksListComponent,
  ],
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceCardComponent {
  @Input() @Required() public experience!: Experience;

  get intervalDates(): { startDate: string; endDate: Nullable<string> } {
    const startDate: string = this.experience.roles
      .map((role: Role) => role.startDate)
      .reduce((previousValue, currentValue) => {
        if (Date.parse(previousValue) < Date.parse(currentValue)) {
          return previousValue;
        }
        return currentValue;
      });

    const endDate: Nullable<string> = this.experience.roles
      .map((role: Role) => role.endDate)
      .reduce((previousValue, currentValue) => {
        if (previousValue === null) {
          return previousValue;
        }

        if (currentValue === null) {
          return currentValue;
        }

        if (Date.parse(previousValue) < Date.parse(currentValue)) {
          return previousValue;
        }
        return currentValue;
      });

    return { startDate, endDate };
  }
}
