import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PartnerLinkComponent } from '@recowd/ui/molecules';
import { Partner } from '@recowd/models';
import { CardModule } from '@recowd/ui-atoms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rc-partners-list',
  standalone: true,
  imports: [CommonModule, PartnerLinkComponent, CardModule],
  templateUrl: './partners-list.component.html',
  styleUrls: ['./partners-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnersListComponent {
  @Input() public partners: Partner[] = [];
}
