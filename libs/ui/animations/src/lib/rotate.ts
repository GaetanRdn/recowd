import {
  animate,
  animation,
  AnimationReferenceMetadata,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';

const rotate: AnimationReferenceMetadata = animation([
  style({
    transform: 'rotate( {{ angle }} )',
  }),
  animate('{{ time }}'),
]);

export const rotation360Animation = trigger('rotate', [
  transition('default => rotated', [
    useAnimation(rotate, {
      params: { angle: '360deg', time: '800ms ease-out' },
    }),
  ]),
  transition('rotated => default', [
    useAnimation(rotate, {
      params: { angle: '-360deg', time: '600ms ease-in' },
    }),
  ]),
]);
