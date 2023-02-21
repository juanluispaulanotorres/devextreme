import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  addForm!: FormGroup;

  numberPattern = /^([1-9]+\\d*)|[0]/;
  urlPattern =
    /(^[a-zñA-ZÑ]*:\/\/[a-zñA-ZÑ]*\.[a-zA-Z]*\/?[a-z0-9]*\/[a-z]*\.[a-z]{3})/;

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
          Validators.pattern(this.numberPattern),
        ],
      ],
      urlFlag: ['', [Validators.pattern(this.urlPattern)]],
      notes: ['', []],
    });
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
