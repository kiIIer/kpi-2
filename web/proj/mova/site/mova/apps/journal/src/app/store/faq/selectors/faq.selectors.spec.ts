import * as fromFAQ from '../reducers/faq.reducer';
import { selectFAQState } from './faq.selectors';

describe('FAQ Selectors', () => {
  it('should select the feature state', () => {
    const result = selectFAQState({
      [fromFAQ.fAQFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
