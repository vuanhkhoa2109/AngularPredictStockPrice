import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { NbSearchService } from '@nebular/theme';
import { AddEntities, GetIndustryInformation } from '../../store/actions/test.actions';
import { IndustryModel } from '../../models/IndustryModel';
import { Add } from '@ngxs-labs/entity-state';
import { IndustryState } from '../../store/states/Industry.state';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  value: '';
  list: Array<IndustryModel>;

  constructor(private store: Store, private searchService: NbSearchService) {
    this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
        this.value = data.term;
        console.log(this.value);
      });
    this.list = [
      {
        code: 'Hydrogen',
        eps: 20,
        foreignOwned: 'abc',
        marketCapitalization: 1,
        pe: 1,
        roa: 1,
        roe: 1,
        volume: 20
      },
      {
        code: 'Helium',
        eps: 20,
        foreignOwned: 'abc',
        marketCapitalization: 1,
        pe: 1,
        roa: 1,
        roe: 1,
        volume: 20
      },
      {
        code: 'Lithium',
        eps: 20,
        foreignOwned: 'abc',
        marketCapitalization: 1,
        pe: 1,
        roa: 1,
        roe: 1,
        volume: 20
      },
    ];
    this.store.dispatch(new AddEntities(this.list));
    this.store.dispatch(new GetIndustryInformation('^bds'));
  }

  ngOnInit(): void {
  }

}
