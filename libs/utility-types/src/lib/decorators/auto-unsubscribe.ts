import {Subscription} from 'rxjs';

/**
 * Allows to auto unsubscribe from Observables.
 *
 * Automatically check if a (_)subscriptions property exist (must be a Subscription[]), if yes then unsubscribe all.
 * Automatically check these properties, all one which are Observable and is not in the excludeProps is unsubscribed.
 *
 * @param excludeProps list of properties to exclude
 */
export function AutoUnsubscribe(excludeProps: string[] = []) {
  return function (constructor: any) {
    const original = constructor.prototype.ngOnDestroy;

    constructor.prototype.ngOnDestroy = function () {
      // in case of subscriptions property is public or has a getter
      if (Array.isArray(this.subscriptions)) {
        this.subscriptions.forEach((subscription: any) => {
          if (typeof subscription.unsubscribe === 'function') {
            subscription.unsubscribe();
          }
        });
      }
      // in case of subscriptions property is private
      // eslint-disable-next-line no-underscore-dangle
      else if (Array.isArray(this._subscriptions)) {
        // eslint-disable-next-line no-underscore-dangle
        this._subscriptions.forEach((subscription: Subscription) => {
          if (typeof subscription.unsubscribe === 'function') {
            subscription.unsubscribe();
          }
        });
      }

      // Observable properties which are not excluded
      for (const prop in this) {
        if (
          !excludeProps.includes(prop) &&
          typeof this[prop].unsubscribe === 'function'
        ) {
          this[prop].unsubscribe();
        }
      }

      if (original && typeof original === 'function') {
        // eslint-disable-next-line prefer-rest-params
        original.apply(this, arguments);
      }
    };
  };
}
