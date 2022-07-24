import { HttpContextToken } from '@angular/common/http';

export const CACHE_HTTP_CONTEXT_TOKEN: HttpContextToken<boolean> =
  new HttpContextToken(() => false);
