import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/user.service';

@Component({
  selector: 'app-creauser',
  templateUrl: './creauser.component.html',
  styleUrls: ['./creauser.component.css']
})
export class CreauserComponent implements OnInit {

  constructor(private fb: FormBuilder, private _userService: UsuariosService, public router: Router) {
    this.usuarios = null;
    this.idUsuario = 0;
    this.frase = "";
    this.frase2 = "";
    this.userOK = false;
    this.contraOK = false;
    this.contador = 0;

   }

  idUsuario : number;
  frase: string;
  frase2: string;
  contador: number;
  usuarios: Usuario[] | null;


  userOK : boolean;
  contraOK : boolean;


  newuserForm = this.fb.group({
    nombre: [''],
    contrasenia: [''],
  });

  ngOnInit(): void {
    this._userService.getUsuarioData().subscribe((apiUsers)=> (this.usuarios = apiUsers));
  }

  //Desde aqui hasta abajo para el login
  onSubmit(){
    this.comprobarUser();

    if(this.contador!=0){
      this.frase="Usuario ya existe, prueba otro.";
    }
    else if(this.newuserForm.value.nombre == "" || this.newuserForm.value.contrasenia == ""){
      this.frase="Tienes que rellenar al menos usuario y contraseña";
    }
    else{
      this._userService.postUsuarioData(this.newuserForm.value);
      alert("Usuario "+this.newuserForm.value.nombre+" se ha creado")
      this.router.navigate(['/'])

    }

  }

  comprobarUser(){
    this.contador=0;
    if(this.usuarios != null){
      this.usuarios.forEach(element => {
        if(this.newuserForm.value.nombre == element.nombre){
          this.contador++;
        }
      });
    }
  }



}


