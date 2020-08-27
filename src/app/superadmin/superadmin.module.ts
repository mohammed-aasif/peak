//modules
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperadminRoutingModule } from './superadmin-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ValidateEqualModule } from 'ng-validate-equal';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { ToastrModule } from 'ngx-toastr';
import { DpDatePickerModule } from "ng2-date-picker";

//components
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { DasboardComponent } from './dasboard/dasboard.component'; 

import { ManageIntakeFormComponent } from './manage-intake-form/manage-intake-form.component';
import { ManageApprovalListComponent } from './manage-approval-list/manage-approval-list.component';
import { ManageExchangesComponent } from './manage-exchanges/manage-exchanges.component';
 
//module

@NgModule({

  imports: [
    CommonModule,
    SuperadminRoutingModule,
    FormsModule,
    HttpClientModule,
    ValidateEqualModule,
    NgxPaginationModule,
    OrderModule,
    DpDatePickerModule,
    

  ],
  exports: [
    FormsModule,
    NgxPaginationModule,
    OrderModule

  ],
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [LoginComponent,  HeaderComponent, SidebarComponent,  ManageProfileComponent, DasboardComponent,ManageIntakeFormComponent, ManageApprovalListComponent, ManageExchangesComponent],
})
export class SuperadminModule { }
