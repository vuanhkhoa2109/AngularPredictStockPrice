import { Action, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { IndustryModel } from '../../models/IndustryModel';
import { GetIndustryInformation, GetListIndustry } from '../actions/test.actions';
import { catchError, tap } from 'rxjs/operators';
import { StockPriceService } from '../../services/StockPrice.service';

export class AnotherStateModel {
  isLoading: boolean;
  error: string;
  industryInformation: IndustryModel;
}

@State<AnotherStateModel>({
  name: 'another',
  defaults: {
    error: null,
    isLoading: null,
    industryInformation: null
  }
})

@Injectable()
export class AnotherState {
  constructor(private stockPriceService: StockPriceService) {}


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
}
