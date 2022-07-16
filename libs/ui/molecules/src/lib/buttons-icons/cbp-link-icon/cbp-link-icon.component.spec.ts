import { TestBed, waitForAsync } from '@angular/core/testing';

import { CbpLinkIconComponent } from './cbp-link-icon.component';
import { TemplateLookup } from '@recowd/test/utils';

describe('CbpLinkIconComponent', () => {
  let templateLookup: TemplateLookup<CbpLinkIconComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CbpLinkIconComponent],
    }).compileComponents();

    templateLookup = new TemplateLookup(CbpLinkIconComponent);
    templateLookup.detectChanges();
  }));

  it('should create', () =>
    expect(templateLookup.fixture.nativeElement.children).toMatchSnapshot());
});
