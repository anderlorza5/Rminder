import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private _userService: UsuariosService) {
    this.usuarios = null;
    this.idUsuario = 0;
    this.frase = "";
    this.contador = 0;

   }
  usuarios: Usuario[] | null;
  idUsuario : number;
  frase: string;
  contador: number;



  userForm = this.fb.group({
    nombre: [''],
    contrasenia: [''],
  });

  ngOnInit(): void {
    this._userService.getUsuarioData().subscribe((apiUsers)=> (this.usuarios = apiUsers));
  }

  onSubmit(){
    this.comprobarUser();
    if(this.contador == 0){
      this.frase="No existe una cuenta con este nombre";
    }else{
      this.frase="";
    }
  }

  comprobarUser(){
    this.contador=0;
    if(this.usuarios != null){
      this.usuarios.forEach(element => {
        if(this.userForm.value.nombre == element.nombre){
          this.idUsuario = element.id;
          this.contador++;
        }
      });
    }

  }

}
