import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AnotherState } from '../../store/states/another.state';
import { Observable } from 'rxjs';
import { TestActions } from '../../store/actions';
import { IndustryState } from '../../store/states/Industry.state';
import { IndustryModel } from '../../models/IndustryModel';
import { SetActive } from '@ngxs-labs/entity-state';
import { GetSmallChartData } from '../../store/actions/test.actions';
import { PriceState } from '../../store/states/test.states';


export interface PeriodicElement {
  code: string;
  position: number;
  roa: number;
  roe: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, code: 'Hydrogen', roa: 1.0079, roe: 'H' },
  { position: 2, code: 'Helium', roa: 4.0026, roe: 'He' },
  { position: 3, code: 'Lithium', roa: 6.941, roe: 'Li' },
  { position: 4, code: 'Beryllium', roa: 9.0122, roe: 'Be' },
  { position: 5, code: 'Boron', roa: 10.811, roe: 'B' },
  { position: 6, code: 'Carbon', roa: 12.0107, roe: 'C' },
  { position: 7, code: 'Nitrogen', roa: 14.0067, roe: 'N' },
  { position: 8, code: 'Oxygen', roa: 15.9994, roe: 'O' },
  { position: 9, code: 'Fluorine', roa: 18.9984, roe: 'F' },
  { position: 10, code: 'Neon', roa: 20.1797, roe: 'Ne' },
  { position: 2, code: 'Helium', roa: 4.0026, roe: 'He' },
  { position: 3, code: 'Lithium', roa: 6.941, roe: 'Li' },
  { position: 4, code: 'Beryllium', roa: 9.0122, roe: 'Be' },
  { position: 5, code: 'Boron', roa: 10.811, roe: 'B' },
  { position: 6, code: 'Carbon', roa: 12.0107, roe: 'C' },
  { position: 7, code: 'Nitrogen', roa: 14.0067, roe: 'N' },
  { position: 8, code: 'Oxygen', roa: 15.9994, roe: 'O' },
  { position: 9, code: 'Fluorine', roa: 18.9984, roe: 'F' },
  { position: 10, code: 'Neon', roa: 20.1797, roe: 'Ne' },
];

@Component({
  selector: 'app-industry-table',
  templateUrl: './industry-table.component.html',
  styleUrls: ['./industry-table.component.css']
})
export class IndustryTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  @Select(IndustryState.entities) selectedIndustry$: Observable<IndustryModel>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  onClickIndustryTable(data: PeriodicElement) {
    //this.store.dispatch(new SetActive(IndustryState, data.code));
    this.store.dispatch(new GetSmallChartData(data.code));
  }

}
