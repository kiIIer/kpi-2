import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {uiReducer, ViewState} from './reducers/ui.reducer';
import {routerReducer, RouterState} from '@ngrx/router-store';


export interface State
{
  view: ViewState;
}

export const reducers: ActionReducerMap<State> = {view: uiReducer};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
