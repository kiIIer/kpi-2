import {Component, OnInit} from '@angular/core';
import {Student} from '../../store/students';
import {Observable} from 'rxjs';
import {selectStudents} from '../../store/students/selectors/student.selectors';
import {Store} from '@ngrx/store';

@Component({
  selector: 'mova-students-container',
  templateUrl: './students-container.component.html',
  styleUrls: ['./students-container.component.css'],
})
export class StudentsContainerComponent implements OnInit {
  students$: Observable<Student[] | null>;

  constructor(private store: Store) {
    this.students$ = this.store.select(selectStudents);
  }

  ngOnInit(): void {
  }
}
