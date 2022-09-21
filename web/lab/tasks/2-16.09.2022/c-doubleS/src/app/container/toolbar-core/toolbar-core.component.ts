import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';
import {navNavigations} from '../../store/actions/navigation.actions';
import {Router} from '@angular/router';
import {UIToggleSidenav} from '../../store/actions/ui.actions';

@Component({
  selector: 'app-toolbar-core',
  templateUrl: './toolbar-core.component.html',
  styleUrls: ['./toolbar-core.component.css'],
})
export class ToolbarCoreComponent implements OnInit
{

  constructor(private store: Store, private router: Router)
  {
  }

  ngOnInit(): void
  {
  }

  onGoTo(url: string)
  {
    this.store.dispatch(navNavigations({url: url}));
  }

  onToggleSidenav()
  {
    this.store.dispatch(UIToggleSidenav());
  }

}
