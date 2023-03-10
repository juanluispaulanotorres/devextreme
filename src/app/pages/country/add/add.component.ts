import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import notify from 'devextreme/ui/notify';
import { CountryService } from '../country.service';
import { ICountry } from '../config';
import { CountryComponentsConfig } from '../country-components.config';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  addFormCountry!: FormGroup;

  numberPattern = /^\d+$/;
  urlPattern =
    /(^[a-zñA-ZÑ]*:\/\/[a-zñA-ZÑ]*\.[a-zA-Z]*\/?[a-z0-9]*\/[a-z]*\.[a-z]{3})/;

  // Buttons
  countryComponent = new CountryComponentsConfig();
  arrayButtons = this.countryComponent.buttons;

  constructor(
    private _builder: FormBuilder,
    private _countryService: CountryService
  ) {}

  ngOnInit() {
    this.addFormCountry = this._builder.group({
      name: ['', [Validators.required]],
      region: ['', [Validators.required]],
      language: ['', [Validators.required]],
      population: [
        '',
        [Validators.required, Validators.pattern(this.numberPattern)],
      ],
      urlFlag: ['', [Validators.pattern(this.urlPattern)]],
      description: ['', []],
    });
  }

  btnDisabled(button: any) {
    if (button.id === 'submit' && !this.addFormCountry.valid) return true;
    else return false;
  }

  clickOnButton(button: any) {
    if (button.id === 'submit') {
      this.submit();
    } else {
      this.clear();
    }
  }

  submit() {
    if (this.addFormCountry.invalid) {
      return;
    } else {
      // ENVIAR DATOS A BACK
      const dataForm: ICountry = this.addFormCountry.value;

      this._countryService.addCountry(dataForm).subscribe(
        () => {
          notify(
            {
              message: 'You have submitted the form',
              position: {
                my: 'center top',
                at: 'center top',
              },
            },
            'success',
            3000
          );
        },
        (error) => {
          notify(
            {
              message: 'It has been a problem with the form',
              position: {
                my: 'center top',
                at: 'center top',
              },
            },
            'error',
            3000
          );
        }
      );
    }
  }

  clear() {
    this.addFormCountry.reset();
  }
}
