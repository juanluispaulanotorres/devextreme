import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  addFormUser!: FormGroup;

  urlPattern =
    /(^[a-zñA-ZÑ]*:\/\/[a-zñA-ZÑ]*\.[a-zA-Z]*\/?[a-z0-9]*\/[a-z]*\.[a-z]{3})/;

  // Buttons
  // countryComponent = new CountryComponentsConfig();
  // arrayButtons = this.countryComponent.buttons;

  constructor(
    private _builder: FormBuilder
  ) // private _userService: UserService
  {}

  ngOnInit() {
    this.addFormUser = this._builder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      prefix: ['', [Validators.required]],
      position: ['', [Validators.required]],
      picture: ['', [Validators.pattern(this.urlPattern)]],
      birthDate: [''],
      hireDate: [''],
      address: [''],
      notes: ['', []],
    });
  }
}
