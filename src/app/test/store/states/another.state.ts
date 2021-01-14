import { Action, actionMatcher, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { IndustryModel } from '../../models/IndustryModel';
import { GetIndustryInformation, GetListIndustry, SetSearchValue } from '../actions/test.actions';
import { catchError, tap } from 'rxjs/operators';
import { StockPriceService } from '../../services/StockPrice.service';
import { Observable } from 'rxjs';

export class AnotherStateModel {
  isLoading: boolean;
  error: string;
  industryInformation: IndustryModel;
  search: string;
}

@State<AnotherStateModel>({
  name: 'another',
  defaults: {
    error: null,
    isLoading: null,
    industryInformation: null,
    search: null
  }
})

@Injectable()
export class AnotherState {
  constructor(private stockPriceService: StockPriceService) {}
  @Selector()
  static searchValue(state: AnotherStateModel) {
    return state.search;
  }

  @Action(GetIndustryInformation)
  getListIndustry(state: StateContext<AnotherStateModel>, action: GetIndustryInformation){
    return this.stockPriceService.getIndustryInformation(action.code).pipe(
      tap((listData: IndustryModel) => {
        console.log(listData);
        const nowState = state.getState();
        state.setState({  ...nowState, industryInformation: listData });
      }),
      catchError(err => null)
    );
  }

  @Action(SetSearchValue)
  setSearchValue(state: StateContext<AnotherStateModel>, action: SetSearchValue){
    const current = state.getState();
    state.setState({
      ...current,
      search: action.code
    });
  }
}
