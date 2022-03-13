export class Suscripcion {
  id: number;
  id_Usuario: number;
  nombre: String;
  categoria: String;
  imagen: String;
  fechaVencimiento: Date |null;
  precio: number;




  constructor() {
    this.id=0;
    this.id_Usuario=0;
    this.nombre="";
    this.categoria="";
    this.imagen="";
    this.fechaVencimiento= null;
    this.precio=0;
  }
}
