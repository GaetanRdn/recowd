import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Education } from '@recowd/models';

@Injectable({
  providedIn: 'root',
})
export class DegreeService {
  private readonly _httpClient: HttpClient = inject(HttpClient);

  private readonly _url: string = './assets/data/degrees.json';

  public getAll(): Observable<Education[]> {
    return this._httpClient.get<Education[]>(this._url);
  }
}
