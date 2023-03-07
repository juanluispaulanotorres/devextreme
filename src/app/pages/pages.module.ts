import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxAutocompleteModule, DxButtonModule, DxDataGridModule, DxLoadIndicatorModule, DxNumberBoxModule, DxSelectBoxModule, DxSpeedDialActionModule, DxTextAreaModule, DxTextBoxModule, DxValidatorModule } from 'devextreme-angular';



@NgModule({
  declarations: [],
  exports: [
    CommonModule,
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
    DxLoadIndicatorModule
  ]
})
export class PagesModule { }
