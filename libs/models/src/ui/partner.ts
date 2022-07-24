import { Type } from '@angular/core';

export interface Partner<IconType> {
  link: string;
  icon: Type<IconType>;
}
