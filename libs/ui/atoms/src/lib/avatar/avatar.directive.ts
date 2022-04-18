import { Directive, NgModule } from '@angular/core';

@Directive({
  selector: 'rc-material-icon[rcAvatar], img[rcAvatar]',
  host: {
    class: 'rc-avatar',
  },
})
export class AvatarDirective {}

@NgModule({
  declarations: [AvatarDirective],
  exports: [AvatarDirective],
})
export class AvatarModule {}
