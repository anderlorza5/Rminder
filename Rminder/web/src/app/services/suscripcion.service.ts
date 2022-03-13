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
    bodyData.id_Usuario=body.suscripcionId_Usuario;
    bodyData.nombre=body.suscripcionNombre;
    bodyData.categoria=body.suscripcionCategoria;
    bodyData.imagen=body.suscripcionImagen;
    bodyData.fechaVencimiento=body.suscripcionFechaVencimiento;
    bodyData.precio=body.suscripcionPrecio;


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
}