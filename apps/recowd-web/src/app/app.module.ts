import { inject, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RwFooterComponent, RwToolbarComponent } from '@recowd/ui/organisms';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    TranslateModule.forRoot({
      defaultLanguage: 'fr',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    RwToolbarComponent,
    RwFooterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  private _translateService: TranslateService = inject(TranslateService);

  constructor() {
    this._translateService.use(navigator.language === 'fr' ? 'fr' : 'en');
  }
}
