import { EducationPageComponent } from '../pages/education-page/education-page.component';
import { Routes } from '@angular/router';
import { PartnersPageComponent } from '../pages/partners-page/partners-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'partners',
    pathMatch: 'full',
  },
  {
    path: 'degrees',
    component: EducationPageComponent,
    data: { animation: 'degrees' },
  },
  {
    path: 'partners',
    component: PartnersPageComponent,
    data: { animation: 'partners' },
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
