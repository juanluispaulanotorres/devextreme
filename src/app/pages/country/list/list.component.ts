import { Component } from '@angular/core';
import { CountryService } from '../country.service';

interface IObjCarousel {
  imageSrc: string;
  text: string;
}

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  arrayCountries: any[] = [];

  carrouselFlags: IObjCarousel = {
    imageSrc: '',
    text: '',
  };

  arrayFlags: IObjCarousel[] = [];
  rowIndex: number = 0;

  visible: boolean = false;

  constructor(private countryService: CountryService) {
    this.countryService.listCountries().subscribe((countryList) => {
      this.arrayCountries = countryList;

      this.arrayCountries.map((country) => {
        // Info para el carrousel de imágenes
        this.carrouselFlags.text = country.name;
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
    if (event.rowType == 'data' && event.columnIndex === 4) {
      this.visible = !this.visible; // Popup visible
      this.rowIndex = event.rowIndex; // Obtención del índice de la fila seleccionada para abrir el popup mostrando la bandera actual
    }
  }

  getPropVisible(event: any) {
    this.visible = event;
  }

  allowDeleting() {
    // Petición DELETE a back
    //return !AppComponent.isChief(e.row.data.Position);
  }
}
