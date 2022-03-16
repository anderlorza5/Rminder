import { Component, Input, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import {

  AbstractControl,

  FormBuilder,

  ValidationErrors,

  ValidatorFn,

  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
  import { SuscripcionService } from 'src/app/services/suscripcion.service';
import { UsuariosService } from 'src/app/services/user.service';
import { Constants } from 'src/app/utils/constants';

@Component({
  selector: 'app-nueva-sub',
  templateUrl: './nueva-sub.component.html',
  styleUrls: ['./nueva-sub.component.css']
})
export class NuevaSubComponent implements OnInit {

  suscripcionForm=this.fb.group({
    id_usuario:["",Validators.required],
    nombre:['',Validators.required],
    categoria:['',Validators.required],
    imagen:['',Validators.required],
    fechavencimiento:['',Validators.required],
    precio:['',Validators.required]
  });

  idUsuario:number;

  constructor( private fb: FormBuilder, private _suscripcionService: SuscripcionService, private _userService: UsuariosService, private activatedRoute: ActivatedRoute, public router: Router) {
    this.idUsuario = 0;


   }
  onSubmit(){
    this.imagen();

    this.suscripcionForm.value.id_usuario = this.idUsuario;
    this._suscripcionService.postSuscripcionData(this.suscripcionForm.value)
    alert("Suscripcion "+this.suscripcionForm.value.nombre+" creada.")
    this.router.navigate(['/suscripcions/'+this.idUsuario]);}


  onVolver(){
    this.router.navigate(['/suscripcions/'+this.idUsuario]);
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parameters: any) => {
      this.idUsuario = parameters.get('idUsuario');
    });
  }

  imagen(){
    alert(this.suscripcionForm.value.categoria)
    switch (this.suscripcionForm.value.categoria) {

      case "Entretenimiento":
        this.suscripcionForm.value.imagen = "./assets/img/ent.png";
        break;

      case "Turismo":
        this.suscripcionForm.value.imagen = "./assets/img/turismo.png";
        break;

      case "Comida":
        this.suscripcionForm.value.imagen = "./assets/img/comida.png";
        break;

      case "Revistas":
        this.suscripcionForm.value.imagen = "./assets/img/revistas.png";
        break;
    }

  }

}
