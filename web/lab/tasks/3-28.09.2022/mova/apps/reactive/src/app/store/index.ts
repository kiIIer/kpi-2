import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {reducer as vreducer, ViewState} from './reducers/view/view.reducer';
import {LinkState, reducer as lreducer} from './reducers/link/link.reducer';

export const appStateFeatureKey = 'appState';

export interface State {
  view: ViewState;
  link: LinkState;
}

export const reducers: ActionReducerMap<State> = {
  'view': vreducer,
  'link': lreducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
