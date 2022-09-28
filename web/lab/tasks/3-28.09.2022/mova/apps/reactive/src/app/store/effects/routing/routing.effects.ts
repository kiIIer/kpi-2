import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {goTo} from '../../actions/routing/routing.actions';
import {Router} from '@angular/router';
import {tap} from 'rxjs';


@Injectable()
export class RoutingEffects {

  goto$ = createEffect(
    () => this.actions$.pipe(
      ofType(goTo),
      tap((action) => this.router.navigateByUrl(action.url)),
    ),
    {dispatch: false},
  );

  constructor(private actions$: Actions, private router: Router) {
  }
}
