import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { DxButtonModule, DxGalleryModule, DxLoadPanelModule, DxPopupModule } from 'devextreme-angular';
import { PopupGalleryComponent } from './components/popups/popup-gallery/popup-gallery.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PopupConfirmationComponent } from './components/popups/popup-confirmation/popup-confirmation.component';
import { LoadPanelComponent } from './components/spinner/load-panel/load-panel.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [PopupGalleryComponent, GalleryComponent, PopupConfirmationComponent, LoadPanelComponent, ButtonComponent],
  imports: [DxPopupModule, DxGalleryModule, DxButtonModule, DxLoadPanelModule, DxButtonModule],
  providers: [],
  exports: [PopupGalleryComponent, GalleryComponent, PopupConfirmationComponent, LoadPanelComponent, ButtonComponent],
  bootstrap: [AppComponent],
})
export class SharedModule {}
