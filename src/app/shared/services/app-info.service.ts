import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'App Devextreme Proyect';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
