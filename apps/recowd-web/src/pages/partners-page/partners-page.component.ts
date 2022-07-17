import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PartnersListComponent } from '@recowd/ui/organisms';
import {
  CbpCustomIconComponent,
  NorsysCustomIconComponent,
} from '@recowd/ui/molecules';

@Component({
  selector: 'rc-partners-page',
  standalone: true,
  imports: [PartnersListComponent],
  templateUrl: './partners-page.component.html',
  styleUrls: ['./partners-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnersPageComponent {
  protected readonly _partners: PartnersListComponent['partners'] = [
    {
      icon: NorsysCustomIconComponent,
      link: 'https://www.norsys.fr/',
    },
    {
      icon: CbpCustomIconComponent,
      link: 'https://www.cbp.fr/',
    },
  ];
}
