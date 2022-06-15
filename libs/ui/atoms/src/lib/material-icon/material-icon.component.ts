import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CoerceString } from '@recowd/utility-types';

@Component({
  selector: 'rc-material-icon',
  standalone: true,
  host: {
    '[class.material-icons]': 'type === "filled"',
    '[class.material-icons-outlined]': 'type === "outlined"',
    '[class.material-icons-two-tone]': 'type === "two-tone"',
    '[class.material-icons-sharp]': 'type === "sharp"',
    '[class.material-icons-round]': 'type === "rounded"',
  },
  template: ` <ng-content></ng-content>`,
  styleUrls: ['./material-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialIconComponent {
  @Input() @CoerceString('filled') public type:
    | 'filled'
    | 'outlined'
    | 'two-tone'
    | 'sharp'
    | 'rounded' = 'filled';
}
