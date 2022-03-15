import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { SuscripcionService } from 'src/app/services/suscripcion.service';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor( private s_service: SuscripcionService) { 
    this.barChartData = {datasets: []};
  }

  ngOnInit(): void {

    this.s_service.getSuscripcionData().subscribe((x) => 
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
      datasets: [{ data: chartData, label: 'Gasto' }],
    };
    });

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