import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ],
      { optional: true }
    ),
    query(':enter', [style({ left: '-100%' })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(
        ':leave',
        [
          animate(
            '0.2s cubic-bezier(0.35, 0, 0.25, 1)',
            style({ left: '100%', opacity: 0 })
          ),
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [animate('0.3s cubic-bezier(0.35, 0, 0.25, 1)', style({ left: '0%' }))],
        {
          optional: true,
        }
      ),
      query('@*', animateChild(), { optional: true }),
    ]),
  ]),
]);
