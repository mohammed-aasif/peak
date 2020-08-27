//modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// components
import { LoginComponent } from './login/login.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { DasboardComponent } from './dasboard/dasboard.component';


import { ManageIntakeFormComponent } from './manage-intake-form/manage-intake-form.component';
import { ManageApprovalListComponent } from './manage-approval-list/manage-approval-list.component';
import { ManageExchangesComponent } from './manage-exchanges/manage-exchanges.component';










const routes: Routes = [
  { path: '', redirectTo: '/superadmin/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'manager-profile', component: ManageProfileComponent },
  { path: 'dashboard', component: DasboardComponent },
  { path: 'manage-intake-form', component:ManageIntakeFormComponent},
  { path: 'manage-approval-list', component:ManageApprovalListComponent},
  { path: 'manage-exchanges', component:ManageExchangesComponent}

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }
