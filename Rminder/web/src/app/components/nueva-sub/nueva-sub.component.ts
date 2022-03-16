import { Component, Input, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import {

  AbstractControl,

  FormBuilder,

  ValidationErrors,

  ValidatorFn,

  } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
    id_usuario:[Constants.IDUSER,Validators.required],
    nombre:['',Validators.required],
    categoria:['',Validators.required],
    imagen:['',Validators.required],
    fechavencimiento:['',Validators.required],
    precio:['',Validators.required]
  });

  constructor( private fb: FormBuilder, private _suscripcionService: SuscripcionService, private _userService: UsuariosService, private activatedRoute: ActivatedRoute) {

   }
  onSubmit(){
    this._suscripcionService.postSuscripcionData(this.suscripcionForm.value)
  }

  onVolver(){
    window.location.href='http://localhost:4200/suscripcions/';
  }

  ngOnInit(): void {
  }


}
