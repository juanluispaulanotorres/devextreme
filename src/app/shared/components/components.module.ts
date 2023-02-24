import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { DxButtonModule, DxGalleryModule, DxPopupModule } from 'devextreme-angular';
import { PopupGalleryComponent } from './popups/popup-gallery/popup-gallery.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PopupConfirmationComponent } from './popups/popup-confirmation/popup-confirmation.component';

@NgModule({
  declarations: [PopupGalleryComponent, GalleryComponent, PopupConfirmationComponent],
  imports: [DxPopupModule, DxGalleryModule, DxButtonModule],
  providers: [],
  exports: [PopupGalleryComponent, GalleryComponent, PopupConfirmationComponent],
  bootstrap: [AppComponent],
})
export class ComponentModule {}
