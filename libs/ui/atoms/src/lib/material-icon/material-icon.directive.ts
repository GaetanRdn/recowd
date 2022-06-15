import { Directive, Input } from '@angular/core';
import { CoerceString } from '@recowd/utility-types';

@Directive({
  selector: 'rc-material-icon, [rcMaterialIcon]',
  standalone: true,
  host: {
    '[class.material-icons]': 'type === "filled"',
    '[class.material-icons-outlined]': 'type === "outlined"',
    '[class.material-icons-two-tone]': 'type === "two-tone"',
    '[class.material-icons-sharp]': 'type === "sharp"',
    '[class.material-icons-round]': 'type === "rounded"',
  },
})
export class MaterialIconDirective {
  @Input() @CoerceString('filled') public type:
    | 'filled'
    | 'outlined'
    | 'two-tone'
    | 'sharp'
    | 'rounded' = 'filled';
}
