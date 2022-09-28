import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RoutingEffects } from './routing.effects';

describe('RoutingEffects', () => {
  let actions$: Observable<any>;
  let effects: RoutingEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RoutingEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(RoutingEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
