import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective, Color, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { Select, Store } from '@ngxs/store';
import { PriceState } from '../../store/states/test.states';
import { Observable } from 'rxjs';
import { StockPriceModel } from '../../models/StockPriceModel';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AnotherState } from '../../store/states/another.state';
import { GetBigChartData } from '../../store/actions/test.actions';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {

  @Select(PriceState.entities) dataPrice$: Observable<StockPriceModel[]>;
  @Select(AnotherState.searchValue) search$: Observable<string>;

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'June',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'Now'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(private route: ActivatedRoute, private store: Store){
    this.dataPrice$.subscribe(value => {
      if (!!value && value.length > 0) {
        console.log(value);
        const dataSets: ChartDataSets[] = [
          { data: [], label: 'No Name' },
        ];
        const dataTime: Label[] = [];
        value.forEach(vl => {
          dataSets[0].data.push(vl.price);
          dataSets[0].label = vl.name;
          dataTime.push(this.parse(vl.dateTime));
        });
        this.lineChartData = dataSets;
        this.lineChartLabels = dataTime;
      }
    });
  }

  ngOnInit(): void {
    this.search$.subscribe(value => {
      if (!!value){
        this.store.dispatch(new GetBigChartData(value));
      }
    });
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public changeColor(): void {
    this.lineChartColors[2].borderColor = 'green';
    this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  }

  public changeLabel(): void {
    this.lineChartLabels[2] = ['1st Line', '2nd Line'];
  }

  parse(date: string): string {
    const list = Array<string>();
    list.push(date.slice(0, 4));
    list.push(date.slice(4, 6));
    list.push(date.slice(6, 8));
    return list.join('/');
  }

}
