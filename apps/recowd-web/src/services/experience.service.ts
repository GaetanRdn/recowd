import { Injectable } from '@angular/core';
import { Experience } from '@recowd/models';
import { CrudService } from '@recowd/services/backend';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService extends CrudService<Experience> {
  protected override readonly _url = './assets/data/experiences.json';
}
