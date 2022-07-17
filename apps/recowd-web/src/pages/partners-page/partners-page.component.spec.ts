import { TestBed, waitForAsync } from '@angular/core/testing';

import { PartnersPageComponent } from './partners-page.component';
import { TemplateLookup } from '@recowd/test/utils';

describe('PartnersPageComponent', () => {
  let templateLookup: TemplateLookup<PartnersPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PartnersPageComponent],
    }).compileComponents();

    templateLookup = new TemplateLookup(PartnersPageComponent);
    templateLookup.detectChanges();
  }));

  it('should create', () =>
    expect(templateLookup.firstChildElement).toMatchSnapshot());
});
