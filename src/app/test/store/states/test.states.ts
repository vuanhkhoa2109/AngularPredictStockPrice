import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { CreateOrReplace, defaultEntityState, EntityState, EntityStateModel, IdStrategy } from '@ngxs-labs/entity-state';
import { StockPriceModel } from '../../models/StockPriceModel';
import { StockPriceService } from '../../services/StockPrice.service';
import { catchError, tap } from 'rxjs/operators';
import { GetSmallChartData } from '../actions/test.actions';

@State<EntityStateModel<StockPriceModel>>({
  name: 'Stock',
  defaults: defaultEntityState()
})

@Injectable()
export class PriceState extends EntityState<StockPriceModel> {
  constructor(private stockService: StockPriceService, private store: Store) {
    super(PriceState, 'name', IdStrategy.EntityIdGenerator);
  }

  @Action(GetSmallChartData)
  getListIndustry(state: StateContext<PriceState>, action: GetSmallChartData){
    return this.stockService.getListIndustryStockPriceForSmallChart(action.code).pipe(
      tap((listData: Array<StockPriceModel>) => {
        return this.store.dispatch(new CreateOrReplace(PriceState, listData));
      }),
      catchError(err => null)
    );
  }
}

