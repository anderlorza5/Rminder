import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import {

  AbstractControl,

  FormBuilder,

  ValidationErrors,

  ValidatorFn,

  } from '@angular/forms';
  import { SuscripcionService } from 'src/app/services/suscripcion.service';

@Component({
  selector: 'app-nueva-sub',
  templateUrl: './nueva-sub.component.html',
  styleUrls: ['./nueva-sub.component.css']
})
export class NuevaSubComponent implements OnInit {

  /*suscripcionForm=this.fb.group(){
    suscripcionNombre:['',Validators.required],
    suscripcionCategoria:['',Validators.required],
    suscripcionImagen:['',Validators.required],
    suscripcionFecha:['',Validators.required],
    suscripcionPrecio:['',Validators.required]
  }*/

  constructor( private fb: FormBuilder, private _suscripcionService: SuscripcionService) { }
  onSubmit(){
    this._suscripcionService.postSuscripcionData(this.suscripcionForm.value)
  }

  ngOnInit(): void {
  }
  suscripcionForm=this.fb.group({
    suscripcionId_Usuario:['',Validators.required],
    suscripcionNombre:['',Validators.required],
    suscripcionCategoria:['',Validators.required],
    suscripcionImagen:['',Validators.required],
    suscripcionfechaVencimiento:['',Validators.required],
    suscripcionPrecio:['',Validators.required]
  });

}
