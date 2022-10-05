import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStories from '../reducers/stories.reducer';

export const selectStoriesState = createFeatureSelector<fromStories.State>(
  fromStories.storiesFeatureKey
);
