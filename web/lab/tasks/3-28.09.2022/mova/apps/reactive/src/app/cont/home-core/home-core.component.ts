import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectHandset, selectTablet, selectWeb} from '../../store/selectors/view/view.selectors';
import {selectLinks} from '../../store/selectors/link/link.selectors';

@Component({
  selector: 'mova-home-core',
  templateUrl: './home-core.component.html',
  styleUrls: ['./home-core.component.css'],
})
export class HomeCoreComponent implements OnInit {
  isHandset$: Observable<boolean> | undefined;
  isTablet$: Observable<boolean> | undefined;
  isWeb$: Observable<boolean> | undefined;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.isHandset$ = this.store.select(selectHandset);
    this.isWeb$ = this.store.select(selectWeb);
    this.isTablet$ = this.store.select(selectTablet);
  }
}
