import {createAction, props} from '@ngrx/store';

export const goTo = createAction(
  '[Routing] Go To',
  props<{ url: string }>(),
);




