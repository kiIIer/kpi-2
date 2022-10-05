import {Action, createReducer, on} from '@ngrx/store';
import * as FAQActions from '../actions/faq.actions';
import {Faq} from '../index';

export const fAQFeatureKey = 'fAQ';

export interface State {
  faqs: Faq[];
}

export const initialState: State = {
  faqs: [],
};

export const reducer = createReducer(
  initialState,

  on(FAQActions.faqFAQs, state => state),
);
