import {createAction, props} from '@ngrx/store';

export const routerGoTo = createAction(
  '[Router] Go To',
  props<{ url: string }>(),
);




