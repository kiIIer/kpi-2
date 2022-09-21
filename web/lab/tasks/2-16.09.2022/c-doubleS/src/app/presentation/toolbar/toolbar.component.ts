import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit
{
  links: string[] = ['Docs', 'Resources', 'Github'];

  @Output() toggleSideNavEvent: EventEmitter<null> = new EventEmitter<null>();

  constructor()
  {
  }

  ngOnInit(): void
  {
  }
}
