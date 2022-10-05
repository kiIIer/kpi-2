import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {routerGoTo} from '../../store/router/actions/router.actions';

@Component({
  selector: 'mova-nav-container',
  templateUrl: './nav-container.component.html',
  styleUrls: ['./nav-container.component.css'],
})
export class NavContainerComponent implements OnInit {
  constructor(private store: Store) {
  }

  ngOnInit(): void {

  }

  onGoTo(url: string) {
    this.store.dispatch(routerGoTo({url: url}));
  }
}
