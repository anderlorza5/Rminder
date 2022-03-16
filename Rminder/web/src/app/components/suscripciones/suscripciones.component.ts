import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Suscripcion } from 'src/app/models/suscripcion.model';
import { SuscripcionService } from 'src/app/services/suscripcion.service';

@Component({
  selector: 'app-suscripciones',
  templateUrl: './suscripciones.component.html',
  styleUrls: ['./suscripciones.component.css','../../apoyo/css/sb-admin-2.min.css','../../apoyo/vendor/fontawesome-free/css/all.min.css']
})
export class SuscripcionesComponent implements OnInit {
  suscripciones: Suscripcion[] | null;
  suscripcionesUsuario: Suscripcion[] | null;
  idUsuario: number;
  frase: string;


  constructor(private _suscripcionService: SuscripcionService, private activatedRoute: ActivatedRoute) {
    this.suscripciones = null;
    this.suscripcionesUsuario = [];
    this.idUsuario = 0;
    this.frase = "";

  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parameters: any) => {
      this.idUsuario = parameters.get('idUsuario');
    });

    this._suscripcionService.getSuscripcionData().subscribe((x) => (this.suscripciones=x) && this.arraySuscripciones());
 }

 borrar(id :number){
  this._suscripcionService.deletePost(id);
  window.location.reload();
 }

 arraySuscripciones(){

  if(this.suscripciones != null){
    this.suscripciones.forEach(element => {
      if(element.id_usuario == this.idUsuario){
        this.suscripcionesUsuario?.push(element);
      }
    });
  }
 }

}
