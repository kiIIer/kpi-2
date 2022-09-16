import { createAction, props } from '@ngrx/store';

export const navNavigations = createAction(
  '[Navigation] Nav Navigations'
);

export const navNavigationsSuccess = createAction(
  '[Navigation] Nav Navigations Success',
  props<{ data: any }>()
);

export const navNavigationsFailure = createAction(
  '[Navigation] Nav Navigations Failure',
  props<{ error: any }>()
);
