import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {concatMap, tap} from 'rxjs/operators';
import {Observable, EMPTY} from 'rxjs';
import * as RouterActions from '../actions/router.actions';
import {Router} from '@angular/router';

@Injectable()
export class RouterEffects {


  goto$ = createEffect(
    () => this.actions$.pipe(
      ofType(RouterActions.routerGoTo),
      tap((action) => this.router.navigateByUrl(action.url)),
    ),
    {dispatch: false},
  );

  constructor(private actions$: Actions, private router: Router) {
  }
}
