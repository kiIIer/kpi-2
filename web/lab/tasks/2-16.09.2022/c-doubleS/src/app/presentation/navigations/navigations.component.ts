import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navigations',
  templateUrl: './navigations.component.html',
  styleUrls: ['./navigations.component.css'],
})
export class NavigationsComponent implements OnInit
{

  @Output() gotoEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor()
  {
  }

  ngOnInit(): void
  {
  }

}
