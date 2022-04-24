import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  NgZone,
  OnInit,
  Output,
  QueryList,
} from '@angular/core';
import {
  defer,
  filter,
  map,
  merge,
  Observable,
  startWith,
  switchMap,
  take,
  tap,
} from 'rxjs';
import { NavMenuItemDirective } from './nav-menu-item.directive';

@Component({
  selector: 'rc-nav-menu',
  exportAs: 'rcMenu',
  template: ` <ng-content></ng-content> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavMenuComponent implements OnInit {
  @ContentChildren(NavMenuItemDirective)
  public readonly menuItems?: QueryList<NavMenuItemDirective>;

  @Output()
  public readonly selectionChange: Observable<NavMenuItemDirective> = defer(
    () => {
      const items = this.menuItems;

      if (items) {
        return items.changes.pipe(
          startWith(items),
          switchMap(() =>
            merge(
              ...items.map((item: NavMenuItemDirective) => item.selectionChange)
            )
          )
        );
      }

      return this._ngZone.onStable.pipe(
        take(1),
        switchMap(() => this.selectionChange)
      );
    }
  ) as Observable<NavMenuItemDirective>;

  constructor(
    private readonly _ngZone: NgZone,
    private readonly _cdr: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.selectionChange
      .pipe(
        map((selectedItem: NavMenuItemDirective) =>
          (this.menuItems ?? []).filter(
            (item: NavMenuItemDirective) =>
              item !== selectedItem && item.selected
          )
        ),
        filter((items: NavMenuItemDirective[]) => !!items.length),
        tap(
          (oldSelected: NavMenuItemDirective[]) =>
            (oldSelected[0].selected = false)
        )
      )
      .subscribe();
  }
}
