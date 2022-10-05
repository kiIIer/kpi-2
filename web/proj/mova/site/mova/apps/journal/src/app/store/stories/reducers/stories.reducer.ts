import {Action, createReducer, on} from '@ngrx/store';
import * as StoriesActions from '../actions/stories.actions';
import {Story} from '../index';

export const storiesFeatureKey = 'stories';

export interface State {
  stories: Story[];
}

export const initialState: State = {
  stories: [],
};

export const reducer = createReducer(
  initialState,

  on(StoriesActions.storyStoriess, state => state),
);
