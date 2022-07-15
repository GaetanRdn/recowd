import { TestBed, waitForAsync } from '@angular/core/testing';

import { RwFooterComponent } from './rw-footer.component';
import { TemplateLookup } from '@recowd/test/utils';

describe('RwFooterComponent', () => {
  let templateLookup: TemplateLookup<RwFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RwFooterComponent],
    }).compileComponents();

    templateLookup = new TemplateLookup(RwFooterComponent);
    templateLookup.detectChanges();
  }));

  it('should create', () =>
    expect(templateLookup.fixture.nativeElement.children).toMatchSnapshot());
});
