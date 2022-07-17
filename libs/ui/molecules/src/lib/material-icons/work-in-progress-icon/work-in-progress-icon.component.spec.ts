import { TestBed, waitForAsync } from '@angular/core/testing';

import { WorkInProgressIconComponent } from './work-in-progress-icon.component';
import { TemplateLookup } from '@recowd/test/utils';

describe('WorkInProgressIconComponent', () => {
  let templateLookup: TemplateLookup<WorkInProgressIconComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [WorkInProgressIconComponent],
    }).compileComponents();

    templateLookup = new TemplateLookup(WorkInProgressIconComponent);
    templateLookup.detectChanges();
  }));

  it('should create', () =>
    expect(templateLookup.fixture.nativeElement.children).toMatchSnapshot());
});
