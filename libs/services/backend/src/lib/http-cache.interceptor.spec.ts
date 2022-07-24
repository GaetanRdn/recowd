import { TestBed } from '@angular/core/testing';

import { HttpCacheInterceptor } from './http-cache-interceptor.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpContext,
} from '@angular/common/http';
import { debounceTime, switchMap } from 'rxjs';
import { CACHE_HTTP_CONTEXT_TOKEN } from './tokens';

describe('HttpCacheInterceptorInterceptor', () => {
  let httpClient: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpCacheInterceptor,
          multi: true,
        },
      ],
    });

    httpClient = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    const context: HttpContext = new HttpContext();
    context.set(CACHE_HTTP_CONTEXT_TOKEN, true);

    httpClient
      .get('/toto', { context })
      .pipe(
        debounceTime(300),
        switchMap(() => httpClient.get('/toto', { context }))
      )
      .subscribe();

    const request = httpController.expectOne('/toto');
    request.flush([]);
    httpController.verify();
  });
});
