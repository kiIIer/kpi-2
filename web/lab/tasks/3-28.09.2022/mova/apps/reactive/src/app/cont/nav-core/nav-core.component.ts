import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectHandset, selectSidenav, selectTablet, selectWeb} from '../../store/selectors/view/view.selectors';
import {selectLinks} from '../../store/selectors/link/link.selectors';
import {Link} from '../../store/reducers/link/link.reducer';
import {goTo} from '../../store/actions/routing/routing.actions';

@Component({
  selector: 'mova-nav-core',
  templateUrl: './nav-core.component.html',
  styleUrls: ['./nav-core.component.css'],
})
export class NavCoreComponent implements OnInit {

  isHandset$: Observable<boolean> | undefined;
  isTablet$: Observable<boolean> | undefined;
  isWeb$: Observable<boolean> | undefined;
  isNavOpened$: Observable<boolean> | undefined;
  links$: Observable<Link[]> | undefined;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.isHandset$ = this.store.select(selectHandset);
    this.links$ = this.store.select(selectLinks);
    this.isWeb$ = this.store.select(selectWeb);
    this.isTablet$ = this.store.select(selectTablet);
    this.isNavOpened$ = this.store.select(selectSidenav);
  }

  onGoTo(url: string) {
    this.store.dispatch(goTo({url: url}));
  }

}
