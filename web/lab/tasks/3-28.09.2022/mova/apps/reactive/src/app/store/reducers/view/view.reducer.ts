import {Action, createReducer, on} from '@ngrx/store';
import {BreakpointState} from '@angular/cdk/layout';
import {closeSideNav, handset, openSideNav, tablet, web} from '../../actions/view/view.actions';


export const viewFeatureKey = 'view';

export interface ViewState {
  isHandset: boolean,
  isTablet: boolean,
  isWeb: boolean
  isSidenavOpened: boolean
}

export const initialState: ViewState = {
  isHandset: false,
  isTablet: false,
  isWeb: true,
  isSidenavOpened: false,
};

export const reducer = createReducer(
  initialState,
  on(web, (state) => ({
    ...state,
    isWeb: true,
    isHandset: false,
    isTablet: false,
    isSidenavOpened: false,
  })),
  on(tablet, (state) => ({
    ...state,
    isWeb: false,
    isHandset: false,
    isTablet: true,
    isSidenavOpened: true,
  })),
  on(handset, (state) => ({
    ...state,
    isWeb: false,
    isHandset: true,
    isTablet: false,
    isSidenavOpened: false,
  })),
  on(openSideNav, (state) => ({
    ...state,
    isSidenavOpened: true,
  })),
  on(closeSideNav, (state) => ({
    ...state,
    isSidenavOpened: false,
  })),
);
