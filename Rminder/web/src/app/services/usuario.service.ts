import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

import { Usuario } from '../models/ususario.model';

@Injectable()
export class UsuariosService {
  constructor(private http: HttpClient) {}

  getUsuarioData() : Observable<Usuario[]> {
    return this.http.get<Usuario[]>(environment.API_URL + 'usuario');
  }


  getUsuarioId(id :number) : Observable<Usuario> {
    return this.http.get<Usuario>(environment.API_URL + 'usuario/'+id);
  }

  postUsuarioData(body : any) : Usuario {
    let bodyData =new Usuario();
    bodyData.id=body.usuarioId;
    bodyData.nombre=body.usuarioNombre;//estos nombres van igual al declarar el formulario en l ts
    bodyData.contraseña= body.usuarioContraseña;



    let result =new Usuario();
    this.http.post<Usuario>(environment.API_URL + 'usuario',bodyData)
    .subscribe(
      (response) => {
        console.log('response received')
        result = response;
      },
      (error) => {
        console.error('error caught in component')
      }
    )
    return result;
  }


}