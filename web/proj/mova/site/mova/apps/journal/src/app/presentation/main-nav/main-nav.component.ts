import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'mova-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {
  @Output() goToEvent: EventEmitter<string> = new EventEmitter<string>();
  @Input() isHandset: boolean | null = false;


  constructor(private breakpointObserver: BreakpointObserver) {
  }

}
