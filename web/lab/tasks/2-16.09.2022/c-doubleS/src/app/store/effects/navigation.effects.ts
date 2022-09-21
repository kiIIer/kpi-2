import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, tap} from 'rxjs';
import {Router} from '@angular/router';
import {navNavigationFail, navNavigations, navNavigationSuccesses} from '../actions/navigation.actions';


@Injectable()
export class NavigationEffects
{
  navigate$ = createEffect(
    () =>
    {
      return this.actions$.pipe(
        ofType(navNavigations),
        tap((action) =>
        {
          this.router.navigateByUrl(action.url);
        }),
      );
    },
    {dispatch: false},
  );


  constructor(private actions$: Actions,
              private router: Router)
  {
  }
}
