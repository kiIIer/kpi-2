import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'mova-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @Input() isHandset: boolean | null;
  @Input() isTablet: boolean | null;
  @Input() isWeb: boolean | null;

  constructor() {
    this.isHandset = false;
    this.isTablet = false;
    this.isWeb = true;
  }
}
