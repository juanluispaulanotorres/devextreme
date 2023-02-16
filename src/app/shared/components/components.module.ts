import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { DxGalleryModule, DxPopupModule } from 'devextreme-angular';
import { PopupComponent } from './popup/popup.component';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    PopupComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    DxPopupModule,
    DxGalleryModule
  ],
  providers: [
  ],
  exports: [
    PopupComponent,
    GalleryComponent
  ],
  bootstrap: [AppComponent]
})
export class ComponentModule { }
