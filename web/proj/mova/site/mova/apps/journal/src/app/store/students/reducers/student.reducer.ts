import {Action, createReducer, on} from '@ngrx/store';
import * as StudentActions from '../actions/student.actions';
import {Student} from '../index';

export const studentFeatureKey = 'student';

export interface State {
  students: Student[];
}

export const initialState: State = {
  students: [],
};

export const reducer = createReducer(
  initialState,

  on(StudentActions.studentStudents, state => state),
);
