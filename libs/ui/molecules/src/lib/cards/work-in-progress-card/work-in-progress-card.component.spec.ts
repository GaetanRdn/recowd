import { TestBed, waitForAsync } from '@angular/core/testing';

import { WorkInProgressCardComponent } from './work-in-progress-card.component';
import { TemplateLookup } from '@recowd/test/utils';
import { TranslateModule } from '@ngx-translate/core';

describe('WorkInProgressCardComponent', () => {
  let templateLookup: TemplateLookup<WorkInProgressCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [WorkInProgressCardComponent, TranslateModule.forRoot()],
    }).compileComponents();

    templateLookup = new TemplateLookup(WorkInProgressCardComponent);
    templateLookup.detectChanges();
  }));

  it('should create', () =>
    expect(templateLookup.fixture.nativeElement.children).toMatchSnapshot());
});
