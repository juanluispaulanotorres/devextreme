import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import ODataStore from 'devextreme/data/odata/store';

interface IObjCarousel {
  imageSrc: string,
  text: string
}

@Component({
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent {
  arrayCountries: any[] = [];

  store: ODataStore;
  dataSource: DataSource;

  carrouselFlags: IObjCarousel = {
    imageSrc: '',
    text: ''
  }

  arrayFlags: IObjCarousel[] = [];
  rowIndex: number = 0;

  visible: boolean = false;

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

        // Info para el carrousel de imágenes
        this.carrouselFlags.text = country.name.common;
        this.carrouselFlags.imageSrc = country.flags?.png;

        this.arrayFlags.push({
          text: this.carrouselFlags.text,
          imageSrc: this.carrouselFlags.imageSrc,
        });
      });
    });
  }

  openPopup(event: any) {

    // Si se hace click sobre una de las banderas
    if (event.rowType !== 'header' && event.columnIndex === 4) {
      this.visible = !this.visible      // Popup visible
      this.rowIndex = event.rowIndex;   // Obtención del índice de la fila seleccionada para abrir el popup mostrando la bandera actual

    } else {
      // Popup de formulario de edición (pendiente de implementación)

    }
  }

}