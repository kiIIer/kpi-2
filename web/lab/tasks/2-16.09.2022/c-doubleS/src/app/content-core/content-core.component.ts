import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';

@Component({
  selector: 'app-content-core',
  templateUrl: './content-core.component.html',
  styleUrls: ['./content-core.component.css']
})
export class ContentCoreComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
