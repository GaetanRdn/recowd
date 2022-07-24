import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { CACHE_HTTP_CONTEXT_TOKEN } from './tokens';

@Injectable({
  providedIn: 'root',
})
export class HttpCacheInterceptor implements HttpInterceptor {
  private readonly _cache: Map<string, HttpResponse<unknown>> = new Map<
    string,
    HttpResponse<unknown>
  >();

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.context.get(CACHE_HTTP_CONTEXT_TOKEN)) {
      const response: HttpResponse<unknown> | undefined = this._cache.get(
        request.urlWithParams
      );

      if (response) {
        return of(response.clone());
      }
    }

    return next.handle(request).pipe(
      tap((stateEvent: HttpEvent<unknown>) => {
        if (stateEvent instanceof HttpResponse) {
          this._cache.set(request.urlWithParams, stateEvent.clone());
        }
      })
    );
  }
}
