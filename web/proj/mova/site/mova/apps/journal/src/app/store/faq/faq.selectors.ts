import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFAQ from './faq.reducer';

export const selectFAQState = createFeatureSelector<fromFAQ.State>(
  fromFAQ.fAQFeatureKey
);
