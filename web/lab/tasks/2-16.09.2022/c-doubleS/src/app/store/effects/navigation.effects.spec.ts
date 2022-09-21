import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { NavigationEffects } from './navigation.effects';

describe('NavigationEffects', () => {
  let actions$: Observable<any>;
  let effects: NavigationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NavigationEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(NavigationEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
