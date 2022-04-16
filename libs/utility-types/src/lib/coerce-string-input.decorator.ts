export function CoerceString(defaultValue = '') {
  return function (
    target: any,
    key: string,
    propertyDescriptor?: PropertyDescriptor
  ): void {
    if (!!propertyDescriptor && !!propertyDescriptor.set) {
      const original = propertyDescriptor.set;

      propertyDescriptor.set = function (next) {
        original.apply(this, [
          next !== null && next !== undefined ? String(next) : defaultValue,
        ]);
      };
    } else {
      coerceWithoutAccessors(target, key, defaultValue);
    }
  };

  function coerceWithoutAccessors(
    target: any,
    key: string,
    defaultValue: string
  ): void {
    const getter = function () {
      // using Typescript reflection
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return this['__' + key];
    };

    const setter = function (next: any) {
      // using Typescript reflection
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this['__' + key] =
        next !== null && next !== undefined ? String(next) : defaultValue;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  }
}
