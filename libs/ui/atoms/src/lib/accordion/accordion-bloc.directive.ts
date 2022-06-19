import {
  AfterContentInit,
  ChangeDetectorRef,
  ContentChild,
  Directive,
  inject,
  Input,
  OnChanges,
} from '@angular/core';
import { AccordionBlocContentComponent } from './accordion-bloc-content.component';
import { AccordionBlocHeaderComponent } from './accordion-bloc-header.component';
import { Subscription, tap } from 'rxjs';
import {
  AutoUnsubscribe,
  BooleanInput,
  CoerceBoolean,
  NgChanges,
} from '@recowd/utility-types';

@Directive({
  selector: '[rcAccordionBloc], rc-accordion-bloc',
  host: {
    class: 'rc-accordion-bloc',
  },
  standalone: true,
})
@AutoUnsubscribe()
export class AccordionBlocDirective implements AfterContentInit, OnChanges {
  static ngAcceptInputType_collapsed: BooleanInput;

  @Input() @CoerceBoolean() public collapsed = true;

  @ContentChild(AccordionBlocHeaderComponent)
  public readonly header!: AccordionBlocHeaderComponent;

  @ContentChild(AccordionBlocContentComponent)
  public readonly content!: AccordionBlocContentComponent;

  private readonly _cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

  private readonly _subscriptions: Subscription[] = [];

  public ngOnChanges(changes: NgChanges<AccordionBlocDirective>): void {
    if (changes.collapsed && !changes.collapsed.isFirstChange()) {
      this.content.collapsed = this.collapsed;
    }
  }

  public ngAfterContentInit(): void {
    this._subscriptions[this._subscriptions.length] = this.header.selectChange
      .pipe(tap(() => (this.content.collapsed = !this.content.collapsed)))
      .subscribe(() => this._cdr.markForCheck());

    if (this.collapsed !== this.content.collapsed) {
      this.content.collapsed = this.collapsed;
    }
  }
}
