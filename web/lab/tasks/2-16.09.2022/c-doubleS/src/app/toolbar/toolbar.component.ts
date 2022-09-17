import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit
{

  @Output() toggleSideNavEvent: EventEmitter<null> = new EventEmitter<null>();
  @Output() goTo: EventEmitter<string> = new EventEmitter<string>();

  constructor()
  {
  }

  ngOnInit(): void
  {
  }
}
