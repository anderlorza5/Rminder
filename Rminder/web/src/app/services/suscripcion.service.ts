import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Suscripcion } from '../models/suscripcion.model';

@Injectable()
export class SuscripcionService {
  constructor(private http: HttpClient) {}
  getSuscripcionData() : Observable<Suscripcion[]> {
    return this.http.get<Suscripcion[]>(environment.API_URL + 'suscripcions');
  }

  SacaSuscripcion(id : number) : Observable<Suscripcion> {
    return this.http.get<Suscripcion>(environment.API_URL + 'suscripcions/'+id);
  }



  postSuscripcionData(body : any) : Suscripcion {
    let bodyData =new Suscripcion();
    bodyData.id_usuario=body.id_usuario;
    bodyData.nombre=body.nombre;
    bodyData.categoria=body.categoria;
    bodyData.imagen=body.imagen;
    bodyData.fechaVencimiento=body.fechavencimiento;
    bodyData.precio=body.precio;


    let result =new Suscripcion();
    this.http.post<Suscripcion>(environment.API_URL + 'suscripcions',bodyData)
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

  deletePost(id :number) {

    this.http.delete(environment.API_URL +'suscripcions/'+id).subscribe(data => {
      console.log(data);
    });
  }
}
