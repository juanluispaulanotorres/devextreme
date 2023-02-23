import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { AddComponent } from './add/add.component';
import { DxButtonModule, DxFormModule, DxNumberBoxModule, DxSelectBoxModule, DxTextAreaModule, DxTextBoxModule, DxValidatorModule } from 'devextreme-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultComponent } from './consult/consult.component';


@NgModule({
  declarations: [
    AddComponent,
    ConsultComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DxFormModule,
    DxTextBoxModule,
    DxNumberBoxModule,
    DxTextAreaModule,
    DxSelectBoxModule,
    DxValidatorModule,
    DxButtonModule
  ]
})
export class CountryModule { }
