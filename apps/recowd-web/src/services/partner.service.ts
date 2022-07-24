import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partner } from '@recowd/models';

@Injectable({
  providedIn: 'root',
})
export class PartnerService {
  private readonly _httpClient: HttpClient = inject(HttpClient);

  private readonly _url: string = './assets/data/partners.json';

  public getAll<Type>(): Observable<Partner[]> {
    return this._httpClient.get<Partner[]>(this._url);
  }
}
