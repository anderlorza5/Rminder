import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { Usuario } from '../models/usuario.model';

@Injectable()
export class UsuariosService {
  constructor(private http: HttpClient) {}

  getUsuarioData() : Observable<Usuario[]> {
    return this.http.get<Usuario[]>(environment.API_URL + 'users');
  }


  getUsuarioId(id:number) : Observable<Usuario> {
    return this.http.get<Usuario>(environment.API_URL + 'users/'+id);
  }

  postUsuarioData(body : any) : Usuario {
    let bodyData =new Usuario();
    bodyData.nombre=body.nombre;//estos nombres van igual al declarar el formulario en l ts
    bodyData.contrasenia= body.contrasenia;



    let result =new Usuario();
    this.http.post<Usuario>(environment.API_URL + 'users',bodyData)
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
