import {createFeatureSelector, createSelector} from '@ngrx/store';
import {State} from '../index';
import {ViewState} from '../reducers/ui.reducer';

export const selectView = createFeatureSelector<ViewState>('uI');
