import { Action, createReducer, on } from '@ngrx/store';
import * as FAQActions from './faq.actions';

export const fAQFeatureKey = 'fAQ';

export interface FaqState {

}

export const initialState: FaqState = {

};

export const reducer = createReducer(
  initialState,

  on(FAQActions.faqFAQs, state => state),

);
