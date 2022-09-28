import {createFeatureSelector, createSelector} from '@ngrx/store';
import {viewFeatureKey as f1, ViewState} from '../../reducers/view/view.reducer';
import {LinkState, linkFeatureKey as f2} from '../../reducers/link/link.reducer';

export const selectView = createFeatureSelector<ViewState>(f1);
export const selectLink = createFeatureSelector<LinkState>(f2);
