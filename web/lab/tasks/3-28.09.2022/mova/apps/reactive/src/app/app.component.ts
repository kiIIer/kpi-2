import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Store} from '@ngrx/store';
import {filter, tap} from 'rxjs';
import {handset, tablet, web} from './store/actions/view/view.actions';

@Component({
  selector: 'mova-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reactive';

  constructor(private breakpointObserver: BreakpointObserver, private store: Store) {
    breakpointObserver.observe(Breakpoints.Web).pipe(
      filter((breakpoint) => breakpoint.matches),
    ).subscribe(() => this.store.dispatch(web()));
    breakpointObserver.observe(Breakpoints.Tablet).pipe(
      filter((breakpoint) => breakpoint.matches),
    ).subscribe(() => this.store.dispatch(tablet()));
    breakpointObserver.observe(Breakpoints.Handset).pipe(
      filter((breakpoint) => breakpoint.matches),
    ).subscribe(() => this.store.dispatch(handset()));
  }

  cl(){
    this.store.dispatch(web())
  }

}
