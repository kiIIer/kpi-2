import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {Link} from '../../store/reducers/link/link.reducer';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'mova-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {

  @Input() isHandset: boolean | null;
  @Input() isTablet: boolean | null;
  @Input() isWeb: boolean | null;
  @Input() links: Link[] | null;
  @Input() isNavOpened: boolean | null;
  @Output() goToEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isHandset = false;
    this.isTablet = false;
    this.isWeb = true;
    this.links = [];
    this.isNavOpened = false;
  }

}
