import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import ODataStore from 'devextreme/data/odata/store';
import { ICountry } from './config';


@Component({
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent {
  arrayCountries: ICountry[] = [];

  store: ODataStore;
  dataSource: DataSource;

  arrayFlags: string[] = [];

  constructor() {
    this.store = new ODataStore({
      url: 'https://restcountries.com/v3.1/all',
    });

    this.dataSource = new DataSource({
      store: this.store,
    });

    this.store.load().then((data: any) => {
      this.arrayCountries = data;

      this.arrayCountries.map((country) => {
        // Obtención del idioma del país
        Object.values(country.languages).forEach((language) => {
          country.language = language;
        });
      });
    });
  }
}