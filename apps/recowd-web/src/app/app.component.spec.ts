import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TemplateLookup } from '@recowd/test/utils';
import { RwToolbarComponent } from '@recowd/ui/organisms';
import { TranslateModule } from '@ngx-translate/core';

describe('AppComponent', () => {
  let templateLookup: TemplateLookup<AppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        RouterTestingModule,
        RwToolbarComponent,
        TranslateModule.forRoot(),
      ],
    }).compileComponents();

    templateLookup = new TemplateLookup(AppComponent);
    templateLookup.detectChanges();
  }));

  it('should create the app', () => {
    expect(templateLookup.fixture.nativeElement.children).toMatchSnapshot();
  });
});
