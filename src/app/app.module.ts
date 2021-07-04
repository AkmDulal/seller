import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthComponent } from './layout/auth/auth.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {MenuItems} from './shared/menu-items/menu-items';
import {BreadcrumbsComponent} from './layout/admin/breadcrumbs/breadcrumbs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CMaterialModule } from './modules/c-material/c-material.module';

// Core Services
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { CommonService } from './services/common.service';

// core class
import { AuthGuard } from './core_classes/auth-guard';
import { AppRole } from './core_classes/app-role';

import { BasicLoginComponent } from './theme/auth/basic-login/basic-login.component';
import { BasicRegComponent } from './theme/auth/basic-reg/basic-reg.component';
import { ForgotComponent } from './theme/auth/forgot/forgot.component';
import { BecomeSellerComponent } from './theme/auth/become-seller/become-seller.component';
import { SellerFormComponent } from './theme/auth/seller-form/seller-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    BreadcrumbsComponent,
    BasicLoginComponent,
    BasicRegComponent,
    ForgotComponent,
    BecomeSellerComponent,
    SellerFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    CMaterialModule,
    HttpClientModule
  ],
  providers: [
    MenuItems,
    AuthService,
    AuthGuard,
    AppRole,
    DataService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
