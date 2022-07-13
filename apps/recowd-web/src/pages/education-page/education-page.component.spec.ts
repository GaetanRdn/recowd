import { TestBed, waitForAsync } from '@angular/core/testing';
import { EducationPageComponent } from './education-page.component';
import { TemplateLookup } from '@recowd/test/utils';

describe('EducationPageComponent', () => {
  let templateLookup: TemplateLookup<EducationPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EducationPageComponent],
    }).compileComponents();

    templateLookup = new TemplateLookup(EducationPageComponent);
    templateLookup.detectChanges();
  }));

  it('should create', () =>
    expect(templateLookup.fixture.nativeElement.children).toMatchSnapshot());
});
