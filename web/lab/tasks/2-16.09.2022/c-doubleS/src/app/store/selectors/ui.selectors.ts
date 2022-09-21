import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ViewState} from '../reducers/ui.reducer';
import {selectView} from './app.selectors';

export const selectSidenavOpened = createSelector(selectView, (state: ViewState) => state.sidenavOpened);
