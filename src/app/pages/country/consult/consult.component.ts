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
  loadingData: boolean = true;
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

  async ngOnInit() {
    this.arrayCountries = await this.getAllCountries();
  }

  getAllCountries(): Promise<ICountry[]> {
    this.loadingData = true;

    return new Promise((resolve) => {
      setTimeout(() => {
        this.countryService
          .getListCountries()
          .subscribe((countries: ICountry[]) => {
            resolve(countries);
          });
        this.loadingData = false;
      }, 2000);
    });
  }

  countrySelected(event: any) {
    this.data = false;

    const country = event.value;

    if (country) {
      this.country.name = country.name;
      this.country.region = country.region;
      this.country.language = country.language;
      this.country.population = country.population;
      this.country.urlFlag = country.urlFlag;
      this.country.description = country.description;

      this.data = true;
    }
  }
}
