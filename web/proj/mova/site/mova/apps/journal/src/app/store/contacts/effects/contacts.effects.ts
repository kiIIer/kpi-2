import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as ContactsActions from '../actions/contacts.actions';

@Injectable()
export class ContactsEffects {


  contContactss$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(ContactsActions.contContactss),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY as Observable<{ type: string }>)
    );
  });

  constructor(private actions$: Actions) {}
}
