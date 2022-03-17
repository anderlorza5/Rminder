import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Suscripcion } from 'src/app/models/suscripcion.model';
import { Usuario } from 'src/app/models/usuario.model';
import { SuscripcionService } from 'src/app/services/suscripcion.service';
import { UsuariosService } from 'src/app/services/user.service';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  suscripciones: Suscripcion[] | null;
  suscripcionesUsuario: Suscripcion[] | null;
  usuarios: Usuario|null;
  idUsuario=0;
  idSuscripcion = 0;
  totalMes: number;
  apoyo: number;
  

  constructor( private s_service: SuscripcionService, private _userService: UsuariosService, private activatedRoute: ActivatedRoute,public router: Router) { 
    this.barChartData = {datasets: []};
    this.idUsuario = 0;
    this.usuarios = null;
    this.suscripciones = null;
    this.suscripcionesUsuario = [];
    this.totalMes = 0;
    this.idSuscripcion = 0;
    this.apoyo = 0;
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parameters: any) => {this.idUsuario=parameters.get("idUsuario")});
    this._userService.getUsuarioId(this.idUsuario).subscribe(apiUsers => (this.usuarios=apiUsers) && this.showGrafico());

    this.s_service.getSuscripcionData().subscribe((arrayPaco) => (this.suscripciones=arrayPaco) && this.arraySuscripciones());
    this.s_service.getSuscripcionData().subscribe((arrayPaco) => (this.suscripciones=arrayPaco) && this.sumaPrecios());
    

    

  }

  sumaPrecios(){
    if(this.suscripcionesUsuario != null){
      this.suscripcionesUsuario.forEach(element => {
        
        this.totalMes = this.totalMes+element.precio;
      });
    }
  }

  

  showGrafico(){
    this.s_service.getSuscripcionUser(this.idUsuario).subscribe((x) => 
    {
      let chartData = new Array(12);
      let currentMonth=-1;
      x.forEach((element) => {

        currentMonth = new Date(element.fechaVencimiento!).getMonth();
          if (chartData[currentMonth] === undefined) {
          chartData[currentMonth] = element.precio;
        } else {
          chartData[currentMonth] += element.precio;
        }
          
      });


    this.barChartData = {
      labels: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ],
      datasets: [{ data: chartData, label: 'Gasto y fecha vencimiento' }],
    };
    });
  }

  arraySuscripciones(){

    if(this.suscripciones != null){
      this.suscripciones.forEach(element => {
        if(element.id_usuario == this.idUsuario){
          this.suscripcionesUsuario?.push(element);
        }
      });
    }
   }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> | undefined;

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }
  }

