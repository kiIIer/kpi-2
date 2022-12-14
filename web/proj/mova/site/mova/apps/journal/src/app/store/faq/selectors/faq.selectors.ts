import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromFAQ from '../reducers/faq.reducer';

export const selectFAQState = createFeatureSelector<fromFAQ.State>(
  fromFAQ.fAQFeatureKey,
);

export const selectFaqs = createSelector(selectFAQState, (state) => state.faqs);
