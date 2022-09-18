import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-footer-core',
  templateUrl: './footer-core.component.html',
  styleUrls: ['./footer-core.component.css'],
})
export class FooterCoreComponent implements OnInit
{

  constructor(private store: Store)
  {
  }

  ngOnInit(): void
  {
  }

}
