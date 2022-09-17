import {Action, createReducer, on} from '@ngrx/store';


export const uIFeatureKey = 'uI';

export interface ViewState
{

}

export const initialState: ViewState = {};

export const reducer = createReducer(
  initialState,
);
