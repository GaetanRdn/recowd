import { inject, NgModule, Pipe, PipeTransform } from '@angular/core';
import { Nullable } from '@recowd/utility-types';
import { CommonModule, DatePipe } from '@angular/common';

@Pipe({
  name: 'fromToDate',
})
export class FromToDatePipe implements PipeTransform {
  private readonly datePipe: DatePipe = inject(DatePipe);

  public transform({
    startDate,
    endDate,
  }: {
    startDate: string;
    endDate: Nullable<string>;
  }): string {
    return (
      this.datePipe.transform(startDate, 'MMMM YYYY') +
      ' - ' +
      this.datePipe.transform(
        endDate === null ? Date.now().toString() : endDate,
        'MMMM YYYY'
      )
    );
  }
}

@NgModule({
  declarations: [FromToDatePipe],
  exports: [FromToDatePipe],
  imports: [CommonModule],
  providers: [DatePipe],
})
export class FromToDatePipeModule {}
