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
    this.userOK = false;
    this.contraOK = false;
   }
  usuarios: Usuario[] | null;
  idUsuario : number;
  frase: string;


  userOK : boolean;
  contraOK : boolean;




  userForm = this.fb.group({
    nombre: [''],
    contrasenia: [''],
  });

  ngOnInit(): void {
    this._userService.getUsuarioData().subscribe((apiUsers)=> (this.usuarios = apiUsers));
  }

  onSubmit(){
    this.comprobarUser();
    this.comprobarContra();

    if(this.userForm.value.nombre == "" || this.userForm.value.contrasenia == ""){
      this.frase="Tienes que rellenar todos los campos"
    }
    else if(this.userOK == false || this.contraOK == false){
      this.frase="Nombre de usuario o contraseña incorrectas.";
    }
    else if(this.userOK == true && this.contraOK == true){
      this.frase="Todo correcto";
      
    }

  }

  comprobarUser(){
    this.userOK = false;
    if(this.usuarios != null){
      this.usuarios.forEach(element => {
        if(this.userForm.value.nombre == element.nombre){
          this.idUsuario = element.id;
          this.userOK = true;
        }
      });
    }
  }

  comprobarContra(){
    this.contraOK = false;
    if(this.usuarios != null){
      if(this.usuarios[this.idUsuario-1].contrasenia == this.userForm.value.contrasenia){

        this.contraOK = true;
      }

    }
  }

}
