import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';
import { EducationPageComponent } from './pages/education-page/education-page.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(
        [
          {
            path: '',
            redirectTo: 'degrees',
            pathMatch: 'full',
          },
          {
            path: 'degrees',
            title: 'Formations',
            component: EducationPageComponent,
          },
        ],
        { initialNavigation: 'enabledBlocking' }
      )
    ),
  ],
});
