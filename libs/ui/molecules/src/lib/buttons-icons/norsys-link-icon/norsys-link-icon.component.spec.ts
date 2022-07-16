import { TestBed, waitForAsync } from '@angular/core/testing';

import { NorsysLinkIconComponent } from './norsys-link-icon.component';
import { TemplateLookup } from '@recowd/test/utils';

describe('NorsysLinkIconComponent', () => {
  let templateLookup: TemplateLookup<NorsysLinkIconComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NorsysLinkIconComponent],
    }).compileComponents();

    templateLookup = new TemplateLookup(NorsysLinkIconComponent);
    templateLookup.detectChanges();
  }));

  it('should create', () =>
    expect(templateLookup.fixture.nativeElement.children).toMatchSnapshot());
});
