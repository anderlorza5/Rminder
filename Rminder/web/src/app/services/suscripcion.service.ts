import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Suscripcion } from '../models/baseSuscripciones.model';
import { Suscripcion } from '../models/producto.model';

@Injectable()
export class ProductoService {
  constructor(private http: HttpClient) {}
  getProductoData() : Observable<Producto[]> {
    return this.http.get<Producto[]>(environment.API_URL + 'producto');
  }


  getProductoId(id :number) : Observable<Producto> {
    return this.http.get<Producto>(environment.API_URL + 'producto/'+id);
  }

  postProductoData(body : any) : Producto {
    let bodyData =new Producto();
    bodyData.id=body.productoId;
    bodyData.nombre=body.productoName;//estos nombres van igual al declarar el formulario en l ts
    bodyData.descripcion= body.productoDescripcion;
    bodyData.precio=body.productoPrecio;
    bodyData.imagen= body.productoImagen;



    let result =new Producto();
    this.http.post<Producto>(environment.API_URL + 'producto',bodyData)
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

  update(id :number , nombre : string, descripcion : string ,nuevoP : number, imagen: string): Observable<any> {

    let bodyData =new baseP();

    bodyData.nombre=nombre;

    bodyData.descripcion=descripcion;

    bodyData.precio=nuevoP;

    bodyData.imagen=imagen;
    return this.http.put(environment.API_URL + 'producto/'+id, bodyData);
}

public deletePost(id :number) {

  this.http.delete(environment.API_URL +'producto/'+id).subscribe(data => {
    console.log(data);
  });
}


}
