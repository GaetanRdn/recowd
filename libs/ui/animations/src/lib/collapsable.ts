import {
  animate,
  AnimationTriggerMetadata,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const collapsable: AnimationTriggerMetadata = trigger('collapsable', [
  state(
    'collapsed',
    style({
      height: '0',
      opacity: 0.5,
    })
  ),
  state(
    'expanded',
    style({
      height: '*',
      opacity: 1,
    })
  ),
  transition('collapsed <=> expanded', [
    animate('0.4s cubic-bezier(0.35, 0, 0.25, 1)'),
  ]),
]);
