import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyComponentComponent } from './components/empty-component/empty-component.component';
import { HomeComponentComponent } from './pages/home/home-component/home-component.component';

import { LoginComponent } from './components/login/login.component';
import { PaginaLoginComponent } from './pages/pagina-login/pagina-login.component';
import { PaginaSuscripcionesComponent } from './pages/pagina-suscripciones/pagina-suscripciones.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginaGastosComponent } from './pages/pagina-gastos/pagina-gastos.component';
import { SuscripcionesComponent } from './components/suscripciones/suscripciones.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { UsuariosService } from './services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SuscripcionService } from './services/suscripcion.service';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { GraficoComponent } from './components/grafico/grafico.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';



@NgModule({
  declarations: [
    AppComponent,
    EmptyComponentComponent,
    HomeComponentComponent,

    LoginComponent,
    PaginaLoginComponent,
    PaginaSuscripcionesComponent,
    HeaderComponent,
    FooterComponent,
    PaginaGastosComponent,
    SuscripcionesComponent,
    GastosComponent,
    GraficoComponent,
    UserHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule

  ],
  providers: [SuscripcionService, UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
