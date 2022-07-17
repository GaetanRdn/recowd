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

@Component({
  selector: 'rc-partner-link',
  standalone: true,
  imports: [ButtonDirective, PartnerHostDirective],
  templateUrl: './partner-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnerLinkComponent<Icon extends CustomIconComponent>
  implements OnInit
{
  @Input() @Required() public partner!: Partner<Icon>;

  @ViewChild(PartnerHostDirective, { static: true })
  private readonly container!: PartnerHostDirective;

  public ngOnInit(): void {
    this.container.viewContainerRef.clear();
    this.container.viewContainerRef.createComponent<Icon>(this.partner.icon);
  }
}
