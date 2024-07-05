import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagomedioPage } from './pagomedio.page';

const routes: Routes = [
  {
    path: '',
    component: PagomedioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagomedioPageRoutingModule {}
