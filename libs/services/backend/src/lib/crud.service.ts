import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class CrudService<Entity> {
  protected readonly _httpClient = inject(HttpClient);

  protected readonly _url!: string;

  public getAll(): Observable<Entity[]> {
    return this._httpClient.get<Entity[]>(this._url);
  }
}
