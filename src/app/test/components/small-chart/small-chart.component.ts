import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-small-chart',
  templateUrl: './small-chart.component.html',
  styleUrls: ['./small-chart.component.css']
})
export class SmallChartComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Cổ phiếu BDS' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions) = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
      ]
    }
  };
  public lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor() {
  }

  ngOnInit(): void {
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
