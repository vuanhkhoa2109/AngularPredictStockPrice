import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { TestActions } from '../actions';

export class TestStateModel{
  numArray: number[];
}

@State<TestStateModel>({
  name: 'test',

  defaults: {
    numArray: []
  }
})

@Injectable()
export class TestState {
  @Selector()
  static getNumArray(state: TestStateModel){
    return state.numArray;
  }

  @Action(TestActions.AddNumber)
  add({ getState, patchState }: StateContext<TestStateModel>, { num }: TestActions.AddNumber ){
    const state = getState();

    patchState({
      numArray: [...state.numArray, num]
    });
  }

  @Action(TestActions.RemoveNumber)
  remove({ getState, patchState }: StateContext<TestStateModel>, { num }: TestActions.RemoveNumber ){
    const state = getState();

    patchState({
      numArray: state.numArray.filter(x => x !== num)
    });
  }
}

