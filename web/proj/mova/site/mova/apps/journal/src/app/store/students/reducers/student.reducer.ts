import {Action, createReducer, on} from '@ngrx/store';
import * as StudentActions from '../actions/student.actions';
import {Student} from '../index';

export const studentFeatureKey = 'student';

export interface State {
  students: Student[];
}

export const initialState: State = {
  students: [
    {
      firstName: 'Mike',
      lastName: 'Molchanov',
      dateOfBirth: new Date('2004-08-02'),
      group: 'IA-12',
    },
  ],
};

export const reducer = createReducer(
  initialState,

  on(StudentActions.studentStudents, state => state),
);
