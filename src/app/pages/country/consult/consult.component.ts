import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { ICountry } from '../config';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.scss'],
})
export class ConsultComponent implements OnInit {
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

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries() {
    this.countryService
      .getListCountries()
      .subscribe((countries: ICountry[]) => {
        countries.forEach((country: ICountry) => {
          this.arrayCountries.push(country);
        });
      });
  }

  countrySelected(event: any) {
    this.data = false;

    const country = event.value;

    this.country.name = country.name;
    this.country.region = country.region;
    this.country.language = country.language;
    this.country.population = country.population;
    this.country.urlFlag = country.urlFlag;
    this.country.description = country.description;

    this.data = true;
  }

  updateCountryInfo(event: any) {
    this.data = false;

    let countryName = event.value;

    this.arrayCountries.forEach((country) => {
      if (countryName === country.name) {
        this.country.name = country.name;
        this.country.region = country.region;
        this.country.language = country.language;
        this.country.population = country.population;
        this.country.urlFlag = country.urlFlag;
        this.country.description = country.description;

        this.data = true;
      }
    });
  }
}
