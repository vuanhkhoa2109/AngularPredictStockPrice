import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { NbSearchService } from '@nebular/theme';
import { AddEntities, GetIndustryInformation, GetListIndustry } from '../../store/actions/test.actions';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  value: '';

  constructor(private store: Store, private searchService: NbSearchService) {
    this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
        this.value = data.term;
        console.log(this.value);
      });
    this.store.dispatch(new GetListIndustry());
  }

  ngOnInit(): void {
  }

}
