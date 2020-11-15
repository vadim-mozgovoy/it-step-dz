import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'weather'
  }, {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  }, {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
  }, {
    path: 'weather',
    loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
