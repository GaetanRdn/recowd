import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TemplateLookup } from '@recowd/test/utils';

describe('AppComponent', () => {
  let templateLookup: TemplateLookup<AppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppComponent],
    }).compileComponents();

    templateLookup = new TemplateLookup(AppComponent);
    templateLookup.detectChanges();
  }));

  it('should create the app', () => {
    expect(templateLookup.fixture.nativeElement.children).toMatchSnapshot();
  });
});
