import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../store';
import {navNavigations} from '../actions/navigation.actions';
import {Router} from '@angular/router';

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

}
