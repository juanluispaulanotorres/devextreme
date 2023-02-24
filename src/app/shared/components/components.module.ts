import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { DxButtonModule, DxGalleryModule, DxLoadPanelModule, DxPopupModule } from 'devextreme-angular';
import { PopupGalleryComponent } from './popups/popup-gallery/popup-gallery.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PopupConfirmationComponent } from './popups/popup-confirmation/popup-confirmation.component';
import { LoadPanelComponent } from './spinner/load-panel/load-panel.component';

@NgModule({
  declarations: [PopupGalleryComponent, GalleryComponent, PopupConfirmationComponent, LoadPanelComponent],
  imports: [DxPopupModule, DxGalleryModule, DxButtonModule, DxLoadPanelModule],
  providers: [],
  exports: [PopupGalleryComponent, GalleryComponent, PopupConfirmationComponent, LoadPanelComponent],
  bootstrap: [AppComponent],
})
export class ComponentModule {}
