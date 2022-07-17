import { TestBed, waitForAsync } from '@angular/core/testing';

import { ExperiencesPageComponent } from './experiences-page.component';
import { TemplateLookup } from '@recowd/test/utils';
import { TranslateModule } from '@ngx-translate/core';

describe('ExperiencesPageComponent', () => {
  let templateLookup: TemplateLookup<ExperiencesPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ExperiencesPageComponent, TranslateModule.forRoot()],
    }).compileComponents();

    templateLookup = new TemplateLookup(ExperiencesPageComponent);
    templateLookup.detectChanges();
  }));

  it('should create', () =>
    expect(templateLookup.fixture.nativeElement.children).toMatchSnapshot());
});
