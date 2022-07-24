import { Injectable } from '@angular/core';
import { Experience } from '@recowd/models';
import {
  CACHE_HTTP_CONTEXT_TOKEN,
  CrudService,
} from '@recowd/services/backend';
import { Observable } from 'rxjs';
import { HttpContext } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService extends CrudService<Experience> {
  protected override readonly _url = './assets/data/experiences.json';

  public override getAll(): Observable<Experience[]> {
    const context = new HttpContext();
    context.set(CACHE_HTTP_CONTEXT_TOKEN, true);

    return super.getAll({ context });
  }
}
