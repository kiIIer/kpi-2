import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit
{

  form: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder)
  {
  }

  ngOnInit(): void
  {
    this.form = this.formBuilder.group({
      ['name']: ['', Validators.required],
      ['surname']: ['', Validators.required],
    });
  }

  submit()
  {
    if (!this.form!.valid)
    {
      return;
    }
    console.log(this.form?.value);
  }

}
