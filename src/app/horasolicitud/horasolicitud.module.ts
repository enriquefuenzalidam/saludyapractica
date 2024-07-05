import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorasolicitudPageRoutingModule } from './horasolicitud-routing.module';

import { HorasolicitudPage } from './horasolicitud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorasolicitudPageRoutingModule
  ],
  declarations: [HorasolicitudPage]
})
export class HorasolicitudPageModule {}
