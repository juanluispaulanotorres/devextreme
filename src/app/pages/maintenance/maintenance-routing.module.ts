import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/shared/services';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'add',
        component: AddComponent,
        canActivate: [ AuthGuardService ]
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }
