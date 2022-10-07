import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../store/students';

@Component({
  selector: 'mova-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  @Input() students: Student[] | null = [];
  displayedColumns: string[]= ['firstName', 'lastName', 'group', 'dateOfBirth'];

  constructor() {
  }

  ngOnInit(): void {
  }
}
