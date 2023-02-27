import { Component, OnInit } from '@angular/core';
import { ICountry } from '../config';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})
export class ModifyComponent implements OnInit {

  data!: boolean;
  arrayCountries: ICountry[] = [];
  country: ICountry = {
    name: '',
    region: '',
    language: '',
    population: 0,
    description: '',
    urlFlag: '',
  };

  constructor(private countryService: CountryService) { }

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
