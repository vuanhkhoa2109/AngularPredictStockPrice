import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { NgxsModule } from '@ngxs/store';
import { TestState } from './store/states/test.states';
import { MainPageComponent } from './containers/main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { NbLayoutModule } from '@nebular/theme';
import { SmallChartComponent } from './components/small-chart/small-chart.component';
import { BrowserModule } from '@angular/platform-browser';
import {
  AreaSeriesService, CandleSeriesService,
  ChartAllModule,
  ChartModule, DataLabelService,
  DateTimeService, LegendService, PeriodSelectorService,
  RangeNavigatorModule,
  StockChartAllModule, StockChartModule, TooltipService
} from '@syncfusion/ej2-angular-charts';


@NgModule({
  declarations: [MainPageComponent, SmallChartComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    NgxsModule.forFeature([TestState]),
    FormsModule,
    NbLayoutModule,
    StockChartModule,
    RangeNavigatorModule,
  ],
  providers: [DateTimeService,
    LegendService,
    TooltipService,
    DataLabelService,
    CandleSeriesService,
    AreaSeriesService,
    DateTimeService,
    PeriodSelectorService]
})
export class TestModule {
}
