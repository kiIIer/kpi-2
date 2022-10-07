import {Action, createReducer, on} from '@ngrx/store';
import * as FAQActions from '../actions/faq.actions';
import {Faq} from '../index';

export const fAQFeatureKey = 'fAQ';

export interface State {
  faqs: Faq[];
}

export const initialState: State = {
  faqs: [
    {question: 'How to angular', answer: 'Just do it'},
    {question: 'How to angular', answer: 'Just do it'},
    {question: 'How to angular', answer: 'Just do it'},
    {question: 'How to angular', answer: 'Just do it'},
    {question: 'How to angular', answer: 'Just do it'},
    {question: 'How to angular', answer: 'Just do it'},
    {question: 'How to angular', answer: 'Just do it'},
    {question: 'How to angular', answer: 'Just do it'},
    {question: 'How to angular', answer: 'Just do it'},
    {question: 'How to angular', answer: 'Just do it'},
    {question: 'How to angular', answer: 'Just do it'},
    {question: 'How to angular', answer: 'Just do it'},
    {question: 'How to angular', answer: 'Just do it'},
    {question: 'How to angular', answer: 'Just do it'},
    {question: 'How to make Lera happy?', answer: 'Turn on Iron Maiden and kiss her'},
    {question: 'How to angular', answer: 'Just do it'},
  ],
};

export const reducer = createReducer(
  initialState,

  on(FAQActions.faqFAQs, state => state),
);
