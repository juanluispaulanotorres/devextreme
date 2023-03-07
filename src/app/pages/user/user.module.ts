import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ConsultComponent } from './consult/consult.component';
import { ModifyComponent } from './modify/modify.component';


@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
    ConsultComponent,
    ModifyComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
