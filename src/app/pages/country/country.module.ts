import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { AddComponent } from './add/add.component';
import {
  DxAutocompleteModule,
  DxButtonModule,
  DxDataGridModule,
  DxNumberBoxModule,
  DxSelectBoxModule,
  DxSpeedDialActionModule,
  DxTextAreaModule,
  DxTextBoxModule,
  DxValidatorModule,
} from 'devextreme-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultComponent } from './consult/consult.component';
import { ListComponent } from './list/list.component';
import { ComponentModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [AddComponent, ConsultComponent, ListComponent],
  imports: [
    CommonModule,
    ComponentModule,
    CountryRoutingModule,
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
  ],
})
export class CountryModule {}
