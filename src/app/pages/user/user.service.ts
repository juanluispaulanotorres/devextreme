import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}

  url: string = environment.url;

  // Alta
  addUser(formData: any): Observable<any> {
    return this._http.post(this.url, formData);
  }

  // Listado
  getListUsers(): Observable<any> {
    return this._http.get(this.url);
  }

  // Modificación
  updateUser(user: any): Observable<any> {
    const userId = user.id;
    return this._http.put(`${this.url}/${userId}`, user);
  }

  // Eliminación
  deleteUser(userId: number): Observable<any> {
    return this._http.delete(`${this.url}/${userId}`);
  }
}
