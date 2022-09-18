import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-home-core',
  templateUrl: './home-core.component.html',
  styleUrls: ['./home-core.component.css'],
})
export class HomeCoreComponent implements OnInit
{

  constructor(private store: Store)
  {
  }

  ngOnInit(): void
  {
  }

}
