import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorasolicitudPage } from './horasolicitud.page';

const routes: Routes = [
  {
    path: '',
    component: HorasolicitudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorasolicitudPageRoutingModule {}
