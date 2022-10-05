import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromView from '../reducers/view.reducer';

export const selectViewState = createFeatureSelector<fromView.State>(
  fromView.viewFeatureKey
);
