import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {reducer, ViewState} from '../reducers/ui.reducer';


export interface State
{
  view: ViewState;
}

export const reducers: ActionReducerMap<State> = {view: reducer};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
