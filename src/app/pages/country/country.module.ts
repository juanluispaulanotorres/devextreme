import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { AddComponent } from './add/add.component';
import { ConsultComponent } from './consult/consult.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModifyComponent } from './modify/modify.component';
import { PagesModule } from '../pages.module';

@NgModule({
  declarations: [AddComponent, ConsultComponent, ListComponent, ModifyComponent],
  imports: [
    CommonModule,
    PagesModule,
    SharedModule,
    CountryRoutingModule
  ],
})
export class CountryModule {}
