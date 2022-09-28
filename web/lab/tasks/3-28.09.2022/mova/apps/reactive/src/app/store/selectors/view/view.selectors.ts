import {createFeatureSelector, createSelector} from '@ngrx/store';
import {selectView} from '../app/app.selectors';

export const selectWeb = createSelector(selectView, (state) => state.isWeb);
export const selectTablet = createSelector(selectView, (state) => state.isTablet);
export const selectHandset = createSelector(selectView, (state) => state.isHandset);
export const selectSidenav = createSelector(selectView, (state) => state.isSidenavOpened);
