import { Component, OnInit } from '@angular/core';
import { chartData, series1 } from './datasource';
import { PeriodsModel } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-small-chart',
  templateUrl: './small-chart.component.html',
  styleUrls: ['./small-chart.component.css']
})
export class SmallChartComponent implements OnInit {
  public primaryXAxis: object;
  public primaryYAxis: object;
  public stockchartData: object[];
  public title: string;
  public crosshair: object;

  ngOnInit(): void {
    this.stockchartData = chartData;
    this.title = 'Efficiency of oil-fired power production';
    this.primaryXAxis = {
      valueType: 'DateTime',
      crosshairTooltip: { enable: true }
    };
    this.primaryYAxis = {
      majorTickLines: { color: 'transparent', width: 0 },
      crosshairTooltip: { enable: true }
    };
    this.crosshair = {
      enable: true
    };
  }
}
