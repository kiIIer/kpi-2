import {Action, createReducer, on} from '@ngrx/store';


export const linkFeatureKey = 'link';

export interface LinkState {
  links: Link[];
}

export interface Link {
  text: string;
  url: string;
}

export const initialState: LinkState = {
  links:[
    {text: "Home", url:"home"},
    {text: "Loading", url:"loading"}
  ]
};

export const reducer = createReducer(
  initialState,
);
