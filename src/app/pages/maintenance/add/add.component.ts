import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  addForm!: FormGroup;

  countryName!: string;
  region!: string;
  officialLanguage!: string;
  population!: number;
  urlFlag!: string;
  notes!: string;

  constructor(private builder: FormBuilder) {}

  ngOnInit() {
    this.addForm = this.builder.group({
      countryName: ['', []],
      region: ['', []],
      officialLanguage: ['', []],
      population: [
        0,
        [],
      ],
      urlFlag: ['', []],
      notes: ['', []],
    });
  }

  fieldIsValid(campo: string) {
    return this.addForm.controls[campo].errors && this.addForm.controls[campo].touched;
  }

  submit(formGroup: FormGroup) {
  }

  clear() {
    this.addForm.reset();
  }
}
