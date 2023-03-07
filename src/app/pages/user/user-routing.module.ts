import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/shared/services';
import { AddComponent } from './add/add.component';
import { ConsultComponent } from './consult/consult.component';
import { ListComponent } from './list/list.component';
import { ModifyComponent } from './modify/modify.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'add',
        component: AddComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'list',
        component: ListComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'consult',
        component: ConsultComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'modify',
        component: ModifyComponent,
        canActivate: [AuthGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
