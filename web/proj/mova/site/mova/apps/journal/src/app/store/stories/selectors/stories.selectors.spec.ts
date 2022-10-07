import * as fromStories from '../reducers/stories.reducer';
import { selectStoriesState } from './stories.selectors';

describe('Stories Selectors', () => {
  it('should select the feature state', () => {
    const result = selectStoriesState({
      [fromStories.storiesFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
