import { Pipe, PipeTransform } from '@angular/core';
import { Nullable } from '@recowd/utility-types';

@Pipe({
  name: 'experienceDuration',
  standalone: true,
})
export class ExperienceDurationPipe implements PipeTransform {
  public transform({
    startDate,
    endDate,
  }: {
    startDate: string;
    endDate: Nullable<string>;
  }): string {
    const d2 = endDate === null ? new Date().getTime() : Date.parse(endDate);
    const d1 = Date.parse(startDate);
    const timeDiff = d2 - d1;

    const yearDiff = Math.floor(timeDiff / (1000 * 3600 * 24 * 365));
    const monthDiff = Math.ceil(
      (timeDiff - yearDiff * 1000 * 3600 * 24 * 365) / (1000 * 3600 * 24 * 30)
    );

    let duration = '';

    if (yearDiff > 0) {
      duration += `${yearDiff} an(s)`;

      if (monthDiff > 0) {
        duration += ' et ';
      }
    }
    if (monthDiff > 0) {
      duration += `${monthDiff} mois`;
    }

    return duration;
  }
}
