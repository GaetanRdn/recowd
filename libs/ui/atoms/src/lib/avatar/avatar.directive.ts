import { Directive } from '@angular/core';

@Directive({
  selector: 'rc-material-icon[rcAvatar], img[rcAvatar]',
  standalone: true,
  host: {
    class: 'rc-avatar',
  },
})
export class AvatarDirective {}
