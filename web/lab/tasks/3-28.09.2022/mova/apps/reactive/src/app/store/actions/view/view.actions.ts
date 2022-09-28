import {createAction, props} from '@ngrx/store';

export const web = createAction(
  '[View] Web Breakpoint',
);

export const tablet = createAction(
  '[View] Tablet Breakpoint',
);

export const handset = createAction(
  '[View] Handset Breakpoint'
)

export const openSideNav = createAction(
  '[View] Open Sidenav'
)

export const closeSideNav = createAction(
  '[View] Close Sidenav'
)
