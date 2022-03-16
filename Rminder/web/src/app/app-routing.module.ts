import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastosComponent } from './components/gastos/gastos.component';
import { NuevaSubComponent } from './components/nueva-sub/nueva-sub.component';
import { SuscripcionesComponent } from './components/suscripciones/suscripciones.component';
import { PaginaLoginComponent } from './pages/pagina-login/pagina-login.component';
import { CreauserComponent } from './components/creauser/creauser.component';

const routes: Routes = [
  {path: '', component: PaginaLoginComponent},
  {path: 'index', component: GastosComponent},
  {path: 'suscripcions/:idUsuario', component: SuscripcionesComponent},
  {path: 'nueva/:idUsuario', component:NuevaSubComponent },
  {path: 'creauser', component: CreauserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
