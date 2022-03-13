import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastosComponent } from './components/gastos/gastos.component';
import { SuscripcionesComponent } from './components/suscripciones/suscripciones.component';
import { PaginaLoginComponent } from './pages/pagina-login/pagina-login.component';

const routes: Routes = [
  {path: '', component: PaginaLoginComponent},
  {path: 'index', component: GastosComponent},
  {path: 'suscripcions', component: SuscripcionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
