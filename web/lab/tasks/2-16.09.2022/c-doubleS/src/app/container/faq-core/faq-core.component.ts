import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-faq-core',
  templateUrl: './faq-core.component.html',
  styleUrls: ['./faq-core.component.css'],
})
export class FaqCoreComponent implements OnInit
{

  constructor(private store: Store)
  {
  }

  ngOnInit(): void
  {
  }

}
