import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {filter, Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {viewHandsetOff, viewHandsetOn} from './store/view/actions/view.actions';

@Component({
  selector: 'mova-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'journal';

  constructor(private store: Store, private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(Breakpoints.Handset)
      .subscribe((breakpoint) => breakpoint.matches ? this.store.dispatch(viewHandsetOn()) : this.store.dispatch(viewHandsetOff()));
  }
}
