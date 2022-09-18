import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';
import {asyncScheduler, Observable, scheduled} from 'rxjs';
import {selectSidenavOpened} from '../../store/selectors/ui.selectors';
import {UICloseSidenav} from '../../store/actions/ui.actions';

@Component({
  selector: 'app-content-core',
  templateUrl: './content-core.component.html',
  styleUrls: ['./content-core.component.css'],
})
export class ContentCoreComponent implements OnInit
{
  sidenavOpened$: Observable<boolean> = scheduled([], asyncScheduler);

  constructor(private store: Store)
  {
  }

  ngOnInit(): void
  {
    this.sidenavOpened$ = this.store.select(selectSidenavOpened);
  }

  onSidenavClosed(): void
  {
    this.store.dispatch(UICloseSidenav());
  }

}
