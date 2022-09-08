import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})

export class ListComponent implements OnInit
{
  langs: string[];


  constructor()
  {
    this.langs = ['Go', 'Rust', 'Java', 'C#', 'Python'];
  }

  ngOnInit(): void
  {
  }

}
