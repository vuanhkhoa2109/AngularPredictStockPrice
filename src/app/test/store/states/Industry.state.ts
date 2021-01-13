import { Action, State, StateContext, Store } from '@ngxs/store';
import { Add, CreateOrReplace, defaultEntityState, EntityState, EntityStateModel, IdStrategy } from '@ngxs-labs/entity-state';
import { IndustryModel } from '../../models/IndustryModel';
import { Injectable } from '@angular/core';
import { StockPriceService } from '../../services/StockPrice.service';
import { TestActions } from '../actions';
import { catchError, tap } from 'rxjs/operators';
import { GetListIndustry } from '../actions/test.actions';

@State<EntityStateModel<IndustryModel>>({
  name: 'Industry',
  defaults: defaultEntityState()
})

@Injectable()
export class IndustryState extends EntityState<IndustryModel> {
  constructor(private stockService: StockPriceService, private store: Store) {
    super(IndustryState, 'code', IdStrategy.EntityIdGenerator);
  }

  @Action(GetListIndustry)
  getListIndustry(state: StateContext<IndustryState>, action: GetListIndustry){
    return this.stockService.getListIndustry().pipe(
      tap((listData: Array<IndustryModel>) => {
        return this.store.dispatch(new CreateOrReplace(IndustryState, listData));
      }),
      catchError(err => null)
    );
  }

  @Action(TestActions.AddEntities)
  addEntities(state: StateContext<IndustryState>, action: TestActions.AddEntities){
    return this.store.dispatch(new Add(IndustryState, action.list));
  }

}
