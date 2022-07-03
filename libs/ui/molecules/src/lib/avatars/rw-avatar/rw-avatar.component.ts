import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AvatarDirective } from '@recowd/ui-atoms';

@Component({
  selector: 'rc-rw-avatars',
  standalone: true,
  imports: [AvatarDirective],
  template: `<img alt="avatar" rcAvatar src="assets/venom.png" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RwAvatarComponent {}
