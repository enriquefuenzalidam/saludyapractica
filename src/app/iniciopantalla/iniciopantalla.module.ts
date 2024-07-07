import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciopantallaPageRoutingModule } from './iniciopantalla-routing.module';

import { IniciopantallaPage } from './iniciopantalla.page';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciopantallaPageRoutingModule,
    SharedModule
  ],
  declarations: [IniciopantallaPage]
})
export class IniciopantallaPageModule {}
