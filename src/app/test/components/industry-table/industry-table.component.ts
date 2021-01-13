import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IndustryState } from '../../store/states/Industry.state';
import { IndustryModel } from '../../models/IndustryModel';
import { SetActive } from '@ngxs-labs/entity-state';
import { GetSmallChartData } from '../../store/actions/test.actions';

@Component({
  selector: 'app-industry-table',
  templateUrl: './industry-table.component.html',
  styleUrls: ['./industry-table.component.css']
})
export class IndustryTableComponent implements OnInit {
  displayedColumns: string[] = ['industryCode', 'roa', 'roe'];

  @Select(IndustryState.entities) listIndustries$: Observable<IndustryModel[]>;
  @Select(IndustryState.entities) selectedIndustry$: Observable<IndustryModel>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  onClickIndustryTable(data: IndustryModel) {
    this.store.dispatch(new SetActive(IndustryState, data.industryCode));
    this.store.dispatch(new GetSmallChartData(data.industryCode));
  }

}
