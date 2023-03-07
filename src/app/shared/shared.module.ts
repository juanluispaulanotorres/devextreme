import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import {
  DxAutocompleteModule,
  DxButtonModule,
  DxDataGridModule,
  DxDateBoxModule,
  DxFileUploaderModule,
  DxGalleryModule,
  DxLoadIndicatorModule,
  DxLoadPanelModule,
  DxNumberBoxModule,
  DxPopupModule,
  DxSelectBoxModule,
  DxSpeedDialActionModule,
  DxTextAreaModule,
  DxTextBoxModule,
  DxValidatorModule,
} from 'devextreme-angular';
import { PopupGalleryComponent } from './components/popups/popup-gallery/popup-gallery.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PopupConfirmationComponent } from './components/popups/popup-confirmation/popup-confirmation.component';
import { LoadPanelComponent } from './components/spinner/load-panel/load-panel.component';
import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PopupGalleryComponent,
    GalleryComponent,
    PopupConfirmationComponent,
    LoadPanelComponent,
    ButtonComponent,
  ],
  imports: [DxPopupModule, DxGalleryModule, DxButtonModule, DxLoadPanelModule],
  providers: [],
  exports: [
    PopupGalleryComponent,
    GalleryComponent,
    PopupConfirmationComponent,
    LoadPanelComponent,
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    DxDataGridModule,
    DxTextBoxModule,
    DxNumberBoxModule,
    DxTextAreaModule,
    DxSelectBoxModule,
    DxAutocompleteModule,
    DxValidatorModule,
    DxButtonModule,
    DxSpeedDialActionModule,
    DxLoadIndicatorModule,
    DxFileUploaderModule,
    DxDateBoxModule
  ],
  bootstrap: [AppComponent],
})
export class SharedModule {}
