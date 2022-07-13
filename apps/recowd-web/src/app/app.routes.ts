import { EducationPageComponent } from '../pages/education-page/education-page.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
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
];
