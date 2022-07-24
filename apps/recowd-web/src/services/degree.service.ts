import { Injectable } from '@angular/core';
import { Education } from '@recowd/models';
import {
  CACHE_HTTP_CONTEXT_TOKEN,
  CrudService,
} from '@recowd/services/backend';
import { Observable } from 'rxjs';
import { HttpContext } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DegreeService extends CrudService<Education> {
  protected override readonly _url = './assets/data/degrees.json';

  public override getAll(): Observable<Education[]> {
    const context = new HttpContext();
    context.set(CACHE_HTTP_CONTEXT_TOKEN, true);

    return super.getAll({ context });
  }
}
