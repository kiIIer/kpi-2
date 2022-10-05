export * from './reducers/contacts.reducer';

export interface Person {
  name: string,
  contacts: Contact[]
}

export interface Contact {
  type: string,
  detail: string
}
