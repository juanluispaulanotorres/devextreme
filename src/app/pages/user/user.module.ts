import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ConsultComponent } from './consult/consult.component';
import { ModifyComponent } from './modify/modify.component';
import { PagesModule } from '../pages.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
    ConsultComponent,
    ModifyComponent
  ],
  imports: [
    CommonModule,
    PagesModule,
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
