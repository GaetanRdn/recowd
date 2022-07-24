import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience } from '@recowd/models';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private readonly _httpClient: HttpClient = inject(HttpClient);

  private readonly _url: string = './assets/data/experiences.json';

  public getAll(): Observable<Experience[]> {
    return this._httpClient.get<Experience[]>(this._url);
  }
}
