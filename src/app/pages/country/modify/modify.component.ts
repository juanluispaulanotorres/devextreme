import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import notify from 'devextreme/ui/notify';
import { ICountry } from '../config';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})
export class ModifyComponent implements OnInit {

  // Propiedades para la consulta

  data!: boolean;
  arrayCountries: ICountry[] = [];
  country: ICountry = {
    id: 0,
    name: '',
    region: '',
    language: '',
    population: 0,
    description: '',
    urlFlag: '',
  };

  // Propiedades para el formulario
  updatingFormCountry!: FormGroup;
  numberPattern = /^\d+$/;
  urlPattern =
    /(^[a-zñA-ZÑ]*:\/\/[a-zñA-ZÑ]*\.[a-zA-Z]*\/?[a-z0-9]*\/[a-z]*\.[a-z]{3})/;

  constructor(private _countryService: CountryService, private _builder: FormBuilder) { }

  ngOnInit(): void {
    this.getAllCountries();

    this.updatingFormCountry = this._builder.group({
      id: [0],
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

  getAllCountries() {
    this._countryService
      .getListCountries()
      .subscribe((countries: ICountry[]) => {
        countries.forEach((country: ICountry) => {
          this.arrayCountries.push(country);
        });
      });
  }

  updateCountryInfo(event: any) {
    this.data = false;

    let countryName = event.value;

    this.arrayCountries.forEach((country) => {
      if (countryName === country.name) {
        setTimeout(() => {
          this.country.id = country.id;
          this.country.name = country.name;
          this.country.region = country.region;
          this.country.language = country.language;
          this.country.population = country.population;
          this.country.urlFlag = country.urlFlag;
          this.country.description = country.description;
        }, 1);

        this.data = true;
      }
    });
  }

  submit() {
    if (this.updatingFormCountry.invalid) {
      return;
    } else {
      // ENVIAR DATOS A BACK
      const dataForm: ICountry = this.updatingFormCountry.value;

      this._countryService.updateCountry(dataForm).subscribe(
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
    this.updatingFormCountry.reset();
  }
}
