import { TestBed, waitForAsync } from '@angular/core/testing';

import { PartnerIconComponent } from './partner-icon.component';
import { TemplateLookup } from '@recowd/test/utils';

describe('PartnerIconComponent', () => {
  let templateLookup: TemplateLookup<PartnerIconComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PartnerIconComponent],
    }).compileComponents();

    templateLookup = new TemplateLookup(PartnerIconComponent);
    templateLookup.detectChanges();
  }));

  it('should create', () =>
    expect(templateLookup.firstChildElement).toMatchSnapshot());
});
