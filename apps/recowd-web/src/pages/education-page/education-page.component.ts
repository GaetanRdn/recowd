import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Education } from '@recowd/models';
import { EducationCardsListComponent } from '@recowd/ui/organisms';
import { Observable, take } from 'rxjs';
import { DegreeService } from '../../services/degree.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rc-education-page',
  standalone: true,
  imports: [CommonModule, EducationCardsListComponent],
  templateUrl: './education-page.component.html',
  styleUrls: ['./education-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationPageComponent implements OnInit {
  protected _degrees$!: Observable<Education[]>;

  private readonly _degreeService: DegreeService = inject(DegreeService);

  public ngOnInit(): void {
    this._degrees$ = this._degreeService.getAll().pipe(take(1));
  }
}
