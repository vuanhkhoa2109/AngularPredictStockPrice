import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { NbSearchService } from '@nebular/theme';
import { AddEntities, GetIndustryInformation, GetListIndustry, SetSearchValue } from '../../store/actions/test.actions';
import { IndustryState } from '../../store/states/Industry.state';
import { Observable, Subscription } from 'rxjs';
import { IndustryModel } from '../../models/IndustryModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy {
  searchValue: string;
  @Select(IndustryState.entities) listIndustries$: Observable<IndustryModel[]>;
  subsciption$: Subscription;

  constructor(private store: Store, private searchService: NbSearchService, private router: Router) {
    this.subsciption$ = this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
        this.searchValue = data.term;
        const temp = this.searchValue;
        if (this.searchValue[0] !== '^') {
          this.searchValue = '^' + this.searchValue;
        }
        this.listIndustries$.subscribe(value => {
          console.log(value);
          if (value.findIndex(x => x.industryCode === this.searchValue) !== -1) {
            this.store.dispatch(new SetSearchValue(temp));
            this.router.navigate([temp]);
          } else {
            console.log('khong ton tai');
          }
        }).unsubscribe();
      });
    this.store.dispatch(new GetListIndustry());
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subsciption$.unsubscribe();
  }

}
