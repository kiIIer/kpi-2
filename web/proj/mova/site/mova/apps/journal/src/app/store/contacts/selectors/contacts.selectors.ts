import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromContacts from '../reducers/contacts.reducer';

export const selectContactsState = createFeatureSelector<fromContacts.State>(
  fromContacts.contactsFeatureKey,
);

export const selectStaff = createSelector(selectContactsState, (state) => state.staff);
