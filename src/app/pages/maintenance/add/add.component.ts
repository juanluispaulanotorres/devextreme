import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  addForm!: FormGroup;

  // countryName!: string;
  // region!: string;
  // officialLanguage!: string;
  // population!: number;
  // urlFlag!: string;
  // notes!: string;

  constructor(private builder: FormBuilder) {}

  ngOnInit() {
    this.addForm = this.builder.group({
      countryName: ['', [Validators.required]],
      region: ['', [Validators.required]],
      officialLanguage: ['', [Validators.required]],
      population: [
        '',
        [
          Validators.required,
          Validators.min(0),
          Validators.pattern(/^-?(0|[1-9]\d*)?$/),
        ],
      ],
      urlFlag: [
        '',
        [
          Validators.pattern(
            /(^[a-zñA-ZÑ]*:\/\/[a-zñA-ZÑ]*\.[a-zA-Z]*\/?[a-z0-9]*\/[a-z]*\.[a-z]{3})/
          ),
        ],
      ],
      notes: ['', []],
    });
  }

  fieldIsValid(campo: string) {
    return (
      this.addForm.controls[campo].errors &&
      this.addForm.controls[campo].touched
    );
  }

  submit() {
    if (this.addForm.invalid) {
      return;
    }
  }

  clear() {
    this.addForm.reset();
  }
}
