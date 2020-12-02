import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {PagesComponent} from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: '', redirectTo: 'restaurants', pathMatch: 'full'},
      {path: 'bookings', loadChildren: () => import('./bookings/bookings.module').then(m => m.BookingsModule)},
      {path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)},
      {path: 'restaurants', loadChildren: () => import('./restaurants/restaurants.module').then(m => m.RestaurantsModule)},
      {path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
    ]
  }
];

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule {
}
