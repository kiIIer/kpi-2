import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {routerGoTo} from '../../store/router/actions/router.actions';
import {Observable} from 'rxjs';
import {selectIsHandset} from '../../store/view/selectors/view.selectors';

@Component({
  selector: 'mova-nav-container',
  templateUrl: './nav-container.component.html',
  styleUrls: ['./nav-container.component.css'],
})
export class NavContainerComponent implements OnInit {
  isHandset$: Observable<boolean | null>;

  constructor(private store: Store) {
    this.isHandset$ = this.store.select(selectIsHandset);
  }

  ngOnInit(): void {

  }

  onGoTo(url: string) {
    this.store.dispatch(routerGoTo({url: url}));
  }
}
