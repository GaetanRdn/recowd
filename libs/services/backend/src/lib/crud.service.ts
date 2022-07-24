import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';

type HTTP_GET_OPTIONS = {
  context?: HttpContext;
};

@Injectable({
  providedIn: 'root',
})
export abstract class CrudService<Entity> {
  protected readonly _httpClient = inject(HttpClient);

  protected readonly _url!: string;

  public getAll(options?: HTTP_GET_OPTIONS): Observable<Entity[]> {
    return this._httpClient.get<Entity[]>(this._url, options);
  }
}
