export * from './reducers/student.reducer';

export interface Student {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  group: string;
}
