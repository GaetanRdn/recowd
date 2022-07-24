import { Injectable } from '@angular/core';
import { Partner } from '@recowd/models';
import { CrudService } from '@recowd/services/backend';

@Injectable({
  providedIn: 'root',
})
export class PartnerService extends CrudService<Partner> {
  protected override readonly _url = './assets/data/partners.json';
}
