import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private _http: HttpClient) {}

  url: string = environment.url;

  // Alta
  addCountry(formData: any): Observable<any> {
    return this._http.post(this.url, formData);
  }

  // Listado
  getListCountries(): Observable<any> {
    return this._http.get(this.url);
  }

  // Consulta
  // getCountry(countryName: string): Observable<any> {
  //   return this._http.get(`${this.url}?name=${countryName}`);
  // }

  // Modificación
  updateCountry(country: any): Observable<any> {
    const countryId = country.id;
    return this._http.put(`${this.url}/${countryId}`, country);
  }

  // Eliminación
  deleteCountry(countryId: number): Observable<any> {
    return this._http.delete(`${this.url}/${countryId}`);
  }
}
