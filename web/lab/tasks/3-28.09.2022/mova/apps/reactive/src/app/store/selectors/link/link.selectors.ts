import {createFeatureSelector, createSelector} from '@ngrx/store';
import {selectLink} from '../app/app.selectors';

export const selectLinks = createSelector(selectLink, (state) => state.links);

