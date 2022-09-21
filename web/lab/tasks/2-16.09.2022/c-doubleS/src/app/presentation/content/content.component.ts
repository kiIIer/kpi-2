import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit
{
  @Input() sidenavIsOpened: boolean | null = false;
  @Output() sidenavClosedEvent: EventEmitter<null> = new EventEmitter<null>();

  constructor()
  {
  }

  ngOnInit(): void
  {
  }

}
