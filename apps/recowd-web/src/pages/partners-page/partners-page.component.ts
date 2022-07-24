import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { PartnersListComponent } from '@recowd/ui/organisms';
import { Observable, take } from 'rxjs';
import { Partner } from '@recowd/models';
import { PartnerService } from '../../services/partner.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rc-partners-page',
  standalone: true,
  imports: [CommonModule, PartnersListComponent],
  templateUrl: './partners-page.component.html',
  styleUrls: ['./partners-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnersPageComponent implements OnInit {
  protected _partners$!: Observable<Partner[]>;

  private readonly _partnerService: PartnerService = inject(PartnerService);

  public ngOnInit(): void {
    this._partners$ = this._partnerService.getAll().pipe(take(1));
  }
}
