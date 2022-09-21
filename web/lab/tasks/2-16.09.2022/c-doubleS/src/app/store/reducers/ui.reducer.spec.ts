import {uiReducer, initialState} from './ui.reducer';

describe('UI Reducer', () =>
{
  describe('an unknown action', () =>
  {
    it('should return the previous state', () =>
    {
      const action = {} as any;

      const result = uiReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
