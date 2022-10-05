import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FAQEffects } from './faq.effects';

describe('FAQEffects', () => {
  let actions$: Observable<any>;
  let effects: FAQEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FAQEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(FAQEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
