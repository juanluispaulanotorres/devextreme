import { Component, ViewChild, OnInit } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { CountryService } from '../country.service';
import { ICountry } from '../config';

interface IObjCarousel {
  imageSrc: string | undefined;
  text: string;
}

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) grid!: DxDataGridComponent;

  arrayCountries: ICountry[] = [];
  arrayFlags: IObjCarousel[] = [];
  countryId: number = 0;
  rowIndex: number = 0;
  visible: boolean = false;
  isPopupConfirmationVisible: boolean = false;

  loadingPanelVisible: boolean = false;

  carouselFlags: IObjCarousel = {
    imageSrc: '',
    text: '',
  };

  constructor(private countryService: CountryService) {}

  async ngOnInit() {
    this.arrayCountries = await this.getCountries();
  }

  getCountries(): Promise<ICountry[]> {
    this.arrayCountries = [];
    this.arrayFlags = [];

    return new Promise((resolve) => {
      this.loadingPanelVisible = true;

      setTimeout(() => {
        this.countryService.getListCountries().subscribe((countryList) => {
          resolve(countryList);
          this.arrayFlags = this.carouselImages(countryList);
        });

        this.loadingPanelVisible = false;
      }, 2000);
    });
  }

  carouselImages(arrayCountries: ICountry[]): IObjCarousel[] {
    arrayCountries.map((country: ICountry) => {
      // Info para el carrousel de imágenes
      this.carouselFlags.text = country.name;
      this.carouselFlags.imageSrc = country.urlFlag;

      this.arrayFlags.push({
        text: this.carouselFlags.text,
        imageSrc: this.carouselFlags.imageSrc,
      });
    });

    return this.arrayFlags;
  }

  openGalleryPopup(event: any) {
    // Si se hace click sobre una de las banderas
    if (event.rowType == 'data' && event.column.caption === 'Flag') {
      this.visible = !this.visible; // Popup visible

      this.selectedRow(event);
    }
  }

  selectedRow(event: any) {
    const pageIndex = this.grid.instance.pageIndex();
    const pageSize = this.grid.instance.pageSize();

    this.rowIndex = pageIndex * pageSize + event.rowIndex; // Obtención del índice de la fila seleccionada para abrir el popup mostrando la bandera actual

    this.countryId = event.data.id;
  }

  closeModal(event: any) {
    this.visible = event;
    this.isPopupConfirmationVisible = event;
  }

  async removeCountry() {
    this.isPopupConfirmationVisible = !this.isPopupConfirmationVisible;

    if (this.countryId) {
      this.countryService.deleteCountry(this.countryId).subscribe(() => {
        // Eliminar de la base de datos
        this.grid.instance.deleteRow(this.rowIndex); // Eliminar a nivel visual (HTML)
        this.grid.instance.deselectAll();
      });
    } else {
      return;
    }
    this.arrayCountries = await this.getCountries(); // Se vuelve a realizar una petición a backend para obtener los países y actualizar el array sin recargar la página
  }

  openModal() {
    this.isPopupConfirmationVisible = !this.isPopupConfirmationVisible;
  }

  pressConfirmationModalButtons(buttonPressed: any) {
    switch (buttonPressed) {
      case 'YES':
        this.removeCountry();
        break;

      case 'NO':
        this.isPopupConfirmationVisible = false;
        break;

      default:
        break;
    }
  }
}
