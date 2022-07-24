import { Injectable } from '@angular/core';
import { Partner } from '@recowd/models';
import {
  CACHE_HTTP_CONTEXT_TOKEN,
  CrudService,
} from '@recowd/services/backend';
import { Observable } from 'rxjs';
import { HttpContext } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PartnerService extends CrudService<Partner> {
  protected override readonly _url = './assets/data/partners.json';

  public override getAll(): Observable<Partner[]> {
    const context = new HttpContext();
    context.set(CACHE_HTTP_CONTEXT_TOKEN, true);

    return super.getAll({ context });
  }
}
