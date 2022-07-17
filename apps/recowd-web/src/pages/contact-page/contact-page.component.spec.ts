import { TestBed, waitForAsync } from '@angular/core/testing';

import { ContactPageComponent } from './contact-page.component';
import { TemplateLookup } from '@recowd/test/utils';
import { TranslateModule } from '@ngx-translate/core';

describe('ContactPageComponent', () => {
  let templateLookup: TemplateLookup<ContactPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ContactPageComponent, TranslateModule.forRoot()],
    }).compileComponents();

    templateLookup = new TemplateLookup(ContactPageComponent);
    templateLookup.detectChanges();
  }));

  it('should create', () =>
    expect(templateLookup.fixture.nativeElement.children).toMatchSnapshot());
});
