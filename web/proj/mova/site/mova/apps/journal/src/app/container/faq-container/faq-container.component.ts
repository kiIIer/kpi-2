import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Faq} from '../../store/faq';
import {selectFaqs} from '../../store/faq/selectors/faq.selectors';

@Component({
  selector: 'mova-faq-container',
  templateUrl: './faq-container.component.html',
  styleUrls: ['./faq-container.component.css'],
})
export class FaqContainerComponent implements OnInit {
  faqs$: Observable<Faq[] | null>;

  constructor(private store: Store) {
    this.faqs$ = this.store.select(selectFaqs);
  }

  ngOnInit(): void {
  }
}
