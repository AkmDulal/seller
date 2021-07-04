import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';
import { BasicLoginComponent } from './theme/auth/basic-login/basic-login.component';
import { BasicRegComponent } from './theme/auth/basic-reg/basic-reg.component';
import { ForgotComponent } from './theme/auth/forgot/forgot.component';
import { AuthGuard } from './core_classes/auth-guard';
import { BecomeSellerComponent } from './theme/auth/become-seller/become-seller.component';
import { SellerFormComponent } from './theme/auth/seller-form/seller-form.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('./theme/simple-page/simple-page.module').then(m => m.SimplePageModule)
      },
     
      // {
      //   path: '**',
      //   redirectTo: 'ecommerce'
      // }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: BasicLoginComponent
      },
      {
        path: 'registration',
        component: BasicRegComponent
      },
      {
        path: 'forgot-password',
        component: ForgotComponent
      },
       {
        path: '**',
        redirectTo: 'dashboard'
      },
      {
        path: 'become-seller',
        component: BecomeSellerComponent
      },
      {
        path: 'seller-form',
        component: SellerFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
 // exports: [RouterModule]
  exports: []
})
export class AppRoutingModule { }
