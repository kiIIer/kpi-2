import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
  selector: 'mova-nav-core',
  templateUrl: './nav-core.component.html',
  styleUrls: ['./nav-core.component.css'],
})
export class NavCoreComponent {

  constructor(private store: Store) {
  }

}
