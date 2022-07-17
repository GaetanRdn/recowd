import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TemplateLookup } from '@recowd/test/utils';
import { RwFooterComponent, RwToolbarComponent } from '@recowd/ui/organisms';
import { TranslateModule } from '@ngx-translate/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

describe('AppComponent', () => {
  let templateLookup: TemplateLookup<AppComponent>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'partners', component: AppComponent },
          { path: 'experiences', component: AppComponent },
          { path: 'degrees', component: AppComponent },
          { path: 'contact', component: AppComponent },
        ]),
        RwToolbarComponent,
        RwFooterComponent,
        TranslateModule.forRoot(),
        NoopAnimationsModule,
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    templateLookup = new TemplateLookup(AppComponent);
    templateLookup.detectChanges();
  }));

  it('should create the app', () => {
    expect(templateLookup.fixture.nativeElement.children).toMatchSnapshot();
  });

  it.each`
    event                | route
    ${'partnersClick'}   | ${'/partners'}
    ${'experienceClick'} | ${'/experiences'}
    ${'educationClick'}  | ${'/degrees'}
    ${'contactClick'}    | ${'/contact'}
  `('should redirect to $route when $event is emitted', ({ event, route }) => {
    jest.spyOn(router, 'navigateByUrl');

    templateLookup
      .getComponent(RwToolbarComponent)
      [event as keyof RwToolbarComponent].emit();

    expect(router.navigateByUrl).toBeCalledWith(route);
  });
});
