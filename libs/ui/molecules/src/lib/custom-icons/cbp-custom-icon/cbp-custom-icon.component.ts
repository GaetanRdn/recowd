import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomIconComponent } from '@recowd/ui-atoms';

@Component({
  selector: 'rc-cbp-custom-icon',
  standalone: true,
  imports: [CustomIconComponent],
  templateUrl: './cbp-custom-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CbpCustomIconComponent extends CustomIconComponent {
  public override readonly name = 'cbp';
  public override readonly type = 'svg';
  public override readonly width = 300;
}
