import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStudent from '../reducers/student.reducer';

export const selectStudentState = createFeatureSelector<fromStudent.State>(
  fromStudent.studentFeatureKey
);
