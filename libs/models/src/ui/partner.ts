import { Type } from '@angular/core';
import { CustomIconComponent } from '@recowd/ui-atoms';

export interface Partner<IconType extends CustomIconComponent> {
  link: string;
  icon: Type<IconType>;
}
