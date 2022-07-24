import { Injectable } from '@angular/core';
import { Education } from '@recowd/models';
import { CrudService } from '@recowd/services/backend';

@Injectable({
  providedIn: 'root',
})
export class DegreeService extends CrudService<Education> {
  protected override readonly _url = './assets/data/degrees.json';
}
