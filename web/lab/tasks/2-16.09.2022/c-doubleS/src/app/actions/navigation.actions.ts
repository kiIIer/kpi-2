import {createAction, props} from '@ngrx/store';

export const navNavigations = createAction(
  '[Navigation] Nav Navigations',
  props<{ url: string }>(),
);

export const navNavigationSuccesses = createAction(
  '[Navigation] Nav Navigation Successes',
);

export const navNavigationFail = createAction(
  '[Navigation] Nav Navigation Fail',
);



