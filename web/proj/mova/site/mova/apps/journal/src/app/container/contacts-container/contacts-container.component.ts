import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Person} from '../../store/contacts';
import {Store} from '@ngrx/store';
import {selectStaff} from '../../store/contacts/selectors/contacts.selectors';

@Component({
  selector: 'mova-contacts-container',
  templateUrl: './contacts-container.component.html',
  styleUrls: ['./contacts-container.component.css'],
})
export class ContactsContainerComponent implements OnInit {
  staff$: Observable<Person[] | null>;

  constructor(private store: Store) {
    this.staff$ = this.store.select(selectStaff);
  }

  ngOnInit(): void {
  }
}
