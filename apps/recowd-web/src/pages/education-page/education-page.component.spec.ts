import { TestBed, waitForAsync } from '@angular/core/testing';
import { EducationPageComponent } from './education-page.component';
import { TemplateLookup } from '@recowd/test/utils';
import { DegreeService } from '../../services/degree.service';
import { of } from 'rxjs';
import { LICENCE_DEGREE, MASTER_DEGREE } from '@recowd/test/data';

describe('EducationPageComponent', () => {
  let templateLookup: TemplateLookup<EducationPageComponent>;
  let degreeService: DegreeService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EducationPageComponent],
      providers: [{ provide: DegreeService, useValue: { getAll: jest.fn() } }],
    }).compileComponents();

    degreeService = TestBed.inject(DegreeService);
    templateLookup = new TemplateLookup(EducationPageComponent);
  }));

  it('should create', () => {
    jest
      .spyOn(degreeService, 'getAll')
      .mockReturnValueOnce(of([MASTER_DEGREE, LICENCE_DEGREE]));

    templateLookup.detectChanges();

    expect(templateLookup.fixture.nativeElement.children).toMatchSnapshot();
  });
});
