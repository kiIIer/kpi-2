import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import {environment} from '../../../../environments/environment';
import * as fromFAQ from '../../faq';
import * as fromStories from '../../stories';
import * as fromContacts from '../../contacts';
import * as fromStudents from '../../students';
import * as fromView from '../../view';
import {routerReducer, RouterState} from '@ngrx/router-store';


export interface AppState {
  faq: fromFAQ.State;
  story: fromStories.State;
  contact: fromContacts.State;
  student: fromStudents.State;
  view: fromView.State;
  router: RouterState;
}

export const reducers: ActionReducerMap<AppState> = {
  faq: fromFAQ.reducer,
  story: fromStories.reducer,
  contact: fromContacts.reducer,
  student: fromStudents.reducer,
  view: fromView.reducer,
  router: routerReducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
