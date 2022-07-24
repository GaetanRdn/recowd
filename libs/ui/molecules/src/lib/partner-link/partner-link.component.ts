import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ButtonDirective, CustomIconComponent } from '@recowd/ui-atoms';
import { Partner } from '@recowd/models';
import { Required } from '@recowd/utility-types';
import { PartnerHostDirective } from './partner-host.directive';
import { NorsysCustomIconComponent } from '../custom-icons/norsys-custom-icon/norsys-custom-icon.component';
import { CbpCustomIconComponent } from '../custom-icons/cbp-custom-icon/cbp-custom-icon.component';

@Component({
  selector: 'rc-partner-link',
  standalone: true,
  imports: [ButtonDirective, PartnerHostDirective],
  templateUrl: './partner-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnerLinkComponent implements OnInit {
  @Input() @Required() public partner!: Partner;

  @ViewChild(PartnerHostDirective, { static: true })
  private readonly container!: PartnerHostDirective;

  public ngOnInit(): void {
    this.container.viewContainerRef.clear();
    this.container.viewContainerRef.createComponent<CustomIconComponent>(
      this.partner.icon === 'NorsysCustomIconComponent'
        ? NorsysCustomIconComponent
        : CbpCustomIconComponent
    );
  }
}
