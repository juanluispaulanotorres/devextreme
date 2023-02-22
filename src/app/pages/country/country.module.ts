import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { AddComponent } from './add/add.component';
import { DxButtonModule, DxFormModule, DxTextAreaModule, DxTextBoxModule, DxValidatorModule } from 'devextreme-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DxFormModule,
    DxTextBoxModule,
    DxTextAreaModule,
    DxValidatorModule,
    DxButtonModule
  ]
})
export class CountryModule { }
