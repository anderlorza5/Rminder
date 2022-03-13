import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Suscripcion } from 'src/app/models/suscripcion.model';
import { SuscripcionService } from 'src/app/services/suscripcion.service';

@Component({
  selector: 'app-suscripciones',
  templateUrl: './suscripciones.component.html',
  styleUrls: ['./suscripciones.component.css','../../apoyo/css/sb-admin-2.min.css','../../apoyo/vendor/fontawesome-free/css/all.min.css']
})
export class SuscripcionesComponent implements OnInit {
  @Output() likeEvent = new EventEmitter<string>();
  suscripciones: Suscripcion[] | null;

  @Input() filter: string | null;

  constructor(private _suscripcionService: SuscripcionService) {
    this.suscripciones = null;
    this.filter = null;
  }

  like() {
    this.likeEvent.emit();
  }

  ngOnInit(): void {
    this._suscripcionService.getSuscripcionData().subscribe(x => this.suscripciones=x);
 }

}
