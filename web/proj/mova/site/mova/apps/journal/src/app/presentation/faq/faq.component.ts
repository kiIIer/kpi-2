import {Component, Input, OnInit} from '@angular/core';
import {Faq} from '../../store/faq';

@Component({
  selector: 'mova-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit {
  @Input() faqs: Faq[] | null = [];

  constructor() {
  }

  ngOnInit(): void {
  }
}
