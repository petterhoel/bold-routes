import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'section',
    loadChildren: () => import('./section/section.module').then(m => m.SectionModule)
  },
  {
    path: '',
    redirectTo: '/section',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
