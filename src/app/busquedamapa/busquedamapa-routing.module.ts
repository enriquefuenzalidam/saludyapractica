import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusquedamapaPage } from './busquedamapa.page';

const routes: Routes = [
  {
    path: '',
    component: BusquedamapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusquedamapaPageRoutingModule {}
