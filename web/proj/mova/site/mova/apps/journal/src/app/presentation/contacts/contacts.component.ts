import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../../store/contacts';

@Component({
  selector: 'mova-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  @Input() staff: Person[] | null = [];

  constructor() {
  }

  ngOnInit(): void {
  }
}
