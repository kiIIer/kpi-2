import * as fromContacts from '../reducers/contacts.reducer';
import { selectContactsState } from './contacts.selectors';

describe('Contacts Selectors', () => {
  it('should select the feature state', () => {
    const result = selectContactsState({
      [fromContacts.contactsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
