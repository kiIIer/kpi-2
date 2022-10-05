import { Action, createReducer, on } from '@ngrx/store';
import * as ViewActions from '../actions/view.actions';

export const viewFeatureKey = 'view';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(ViewActions.viewViews, state => state),

);
