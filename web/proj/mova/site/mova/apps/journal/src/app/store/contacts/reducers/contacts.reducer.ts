import {Action, createReducer, on} from '@ngrx/store';
import * as ContactsActions from '../actions/contacts.actions';
import {Person} from '../index';

export const contactsFeatureKey = 'contacts';

export interface State {
  staff: Person[];
}

export const initialState: State = {
  staff: [{name: 'Mike Molchanov', contacts: [{type: 'Telegram', detail: '@Mike_mol'}]}],
};

export const reducer = createReducer(
  initialState,

  on(ContactsActions.contContactss, state => state),
);
