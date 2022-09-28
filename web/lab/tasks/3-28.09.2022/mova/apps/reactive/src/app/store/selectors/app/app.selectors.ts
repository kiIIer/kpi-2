import {createFeatureSelector, createSelector} from '@ngrx/store';
import {viewFeatureKey, ViewState} from '../../reducers/view/view.reducer';

export const selectView = createFeatureSelector<ViewState>(viewFeatureKey);
