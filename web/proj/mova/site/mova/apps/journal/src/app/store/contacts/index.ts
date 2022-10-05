export * from './reducers/contacts.reducer';

export interface Person {
  name: string,
  contacts: {
    type: string,
    detail: string
  }[]
}
