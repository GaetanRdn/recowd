import {
  animate,
  animation,
  AnimationReferenceMetadata,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';

const zoom: AnimationReferenceMetadata = animation([
  style({
    transform: 'scale( {{ scale }} )',
  }),
  animate('{{ time }}'),
]);

export const zoomAnimation = trigger('zoom', [
  transition('default => zoomed', [
    useAnimation(zoom, {
      params: { scale: '1.4', time: '800ms ease-out' },
    }),
  ]),
  transition('zoomed => default', [
    useAnimation(zoom, {
      params: { scale: '1', time: '0ms' },
    }),
  ]),
]);
