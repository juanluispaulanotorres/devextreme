import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import ODataStore from 'devextreme/data/odata/store';
import { IPhone } from './config';


@Component({
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss'],
})
export class MobileComponent {
  arrayPhones: IPhone[] = [];

  store: ODataStore;
  dataSource: DataSource;

  constructor() {

    this.store = new ODataStore({
      url: 'https://dummyjson.com/product'
    });

    this.dataSource = new DataSource({
      store: this.store
    });

    this.store.load().then((data: any) => {
      this.arrayPhones = data.products;
    })
  }
}