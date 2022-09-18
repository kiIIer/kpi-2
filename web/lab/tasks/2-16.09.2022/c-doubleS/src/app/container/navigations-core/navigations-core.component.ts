import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';
import {navNavigations} from '../../store/actions/navigation.actions';
import {Observable} from 'rxjs';
import {UICloseSidenav} from '../../store/actions/ui.actions';

@Component({
  selector: 'app-navigations-core',
  templateUrl: './navigations-core.component.html',
  styleUrls: ['./navigations-core.component.css'],
})
export class NavigationsCoreComponent implements OnInit
{
  constructor(private store: Store)
  {

  }

  onGoTo(link: string)
  {
    this.store.dispatch(UICloseSidenav());
    this.store.dispatch(navNavigations({url: link}));
  }

  ngOnInit(): void
  {
  }

}
