import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule) },
  { path: 'registro', canActivate: [AuthGuard], loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule) },
  { path: 'iniciopantalla', canActivate: [AuthGuard], loadChildren: () => import('./iniciopantalla/iniciopantalla.module').then( m => m.IniciopantallaPageModule) },
  { path: 'horasolicitud', canActivate: [AuthGuard], loadChildren: () => import('./horasolicitud/horasolicitud.module').then( m => m.HorasolicitudPageModule) },
  { path: 'busquedamapa', canActivate: [AuthGuard], loadChildren: () => import('./busquedamapa/busquedamapa.module').then( m => m.BusquedamapaPageModule) },
  { path: 'pagomedio', canActivate: [AuthGuard], loadChildren: () => import('./pagomedio/pagomedio.module').then( m => m.PagomedioPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
