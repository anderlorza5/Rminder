import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './pages/home/home-component/home-component.component';

import { LoginComponent } from './components/login/login.component';
import { PaginaLoginComponent } from './pages/pagina-login/pagina-login.component';
import { PaginaGastosComponent } from './pages/pagina-gastos/pagina-gastos.component';
import { SuscripcionesComponent } from './components/suscripciones/suscripciones.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { UsuariosService } from './services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuscripcionService } from './services/suscripcion.service';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { GraficoComponent } from './components/grafico/grafico.component';
import { NuevaSubComponent } from './components/nueva-sub/nueva-sub.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { CreauserComponent } from './components/creauser/creauser.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,

    LoginComponent,
    PaginaLoginComponent,
    PaginaGastosComponent,
    SuscripcionesComponent,
    GastosComponent,
    GraficoComponent,
    NuevaSubComponent,
    UserHeaderComponent,
    CreauserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    FormsModule

  ],
  providers: [SuscripcionService, UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
