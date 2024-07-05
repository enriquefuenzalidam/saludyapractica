import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciopantallaPage } from './iniciopantalla.page';

const routes: Routes = [
  {
    path: '',
    component: IniciopantallaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciopantallaPageRoutingModule {}
