import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

import {BookingsComponent} from './bookings.component';

const routes: Routes = [
  {path: '', component: BookingsComponent}
];

@NgModule({
  declarations: [
    BookingsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class BookingsModule {}
