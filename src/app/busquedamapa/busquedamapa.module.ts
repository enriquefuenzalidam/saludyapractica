import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusquedamapaPageRoutingModule } from './busquedamapa-routing.module';

import { BusquedamapaPage } from './busquedamapa.page';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusquedamapaPageRoutingModule,
    SharedModule
  ],
  declarations: [BusquedamapaPage]
})
export class BusquedamapaPageModule {}
