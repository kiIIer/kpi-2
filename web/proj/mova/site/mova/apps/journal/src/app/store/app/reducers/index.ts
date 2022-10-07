import {
  ActionReducerMap,
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
  fAQ: fromFAQ.State;
  stories: fromStories.State;
  contacts: fromContacts.State;
  student: fromStudents.State;
  view: fromView.State;
  router: RouterState;
}

export const reducers: ActionReducerMap<AppState> = {
  fAQ: fromFAQ.reducer,
  stories: fromStories.reducer,
  contacts: fromContacts.reducer,
  student: fromStudents.reducer,
  view: fromView.reducer,
  router: routerReducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
