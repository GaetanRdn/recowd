import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ExperienceCardsListComponent } from '@recowd/ui/organisms';
import { ExperienceService } from '../../services/experience.service';
import { Observable, take } from 'rxjs';
import { Experience } from '@recowd/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rc-experiences-page',
  standalone: true,
  imports: [CommonModule, ExperienceCardsListComponent],
  templateUrl: './experiences-page.component.html',
  styleUrls: ['./experiences-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencesPageComponent implements OnInit {
  protected _experiences$!: Observable<Experience[]>;

  private readonly _experienceService: ExperienceService =
    inject(ExperienceService);

  public ngOnInit(): void {
    this._experiences$ = this._experienceService.getAll().pipe(take(1));
  }
}
