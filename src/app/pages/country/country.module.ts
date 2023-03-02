import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { AddComponent } from './add/add.component';
import {
  DxAutocompleteModule,
  DxButtonModule,
  DxDataGridModule,
  DxLoadIndicatorModule,
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
import { SharedModule } from 'src/app/shared/shared.module';
import { ModifyComponent } from './modify/modify.component';

@NgModule({
  declarations: [AddComponent, ConsultComponent, ListComponent, ModifyComponent],
  imports: [
    CommonModule,
    SharedModule,
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
    DxLoadIndicatorModule
  ],
})
export class CountryModule {}
