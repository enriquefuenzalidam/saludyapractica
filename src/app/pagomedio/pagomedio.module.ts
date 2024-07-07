import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagomedioPageRoutingModule } from './pagomedio-routing.module';

import { PagomedioPage } from './pagomedio.page';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagomedioPageRoutingModule,
    SharedModule
  ],
  declarations: [PagomedioPage]
})
export class PagomedioPageModule {}
