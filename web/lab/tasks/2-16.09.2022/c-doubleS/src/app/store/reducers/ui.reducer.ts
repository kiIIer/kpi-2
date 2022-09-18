import {Action, createReducer, on} from '@ngrx/store';
import {UICloseSidenav, UIToggleSidenav} from '../actions/ui.actions';


export const uIFeatureKey = 'uI';

export interface ViewState
{
  sidenavOpened: boolean,
}

export const initialState: ViewState = {
  sidenavOpened: false,
};

export const uiReducer = createReducer(
  initialState,
  on(UIToggleSidenav, (state) => ({
    ...state,
    sidenavOpened: !state.sidenavOpened,
  })),
  on(UICloseSidenav, (state) => ({
    ...state,
    sidenavOpened: false,
  })),
);
