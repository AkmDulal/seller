import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SimplePageComponent } from './simple-page.component';
import {SimplePageRoutingModule} from './simple-page-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomFormsModule} from 'ngx-custom-validators';
import {ChartModule} from 'angular2-chartjs';
import { LayoutRoutes } from './layout.routing';
import { CMaterialModule } from '../../modules/c-material/c-material.module'

import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { FrmValidationComponent } from './frm-validation/frm-validation.component';
import { TblDatatableComponent } from './tbl-datatable/tbl-datatable.component';
import { SapvaiiiComponent } from './sapvaiii/sapvaiii.component';
import { SLoginpagesComponent } from './s-loginpages/s-loginpages.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { PProductComponent } from './p-product/p-product.component';
import { AddProductFromComponent } from './add-product-from/add-product-from.component';
// Order Reviews
import { OrdersReviewsComponent } from './orders-reviews/orders-reviews.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { ManageReviewsComponent } from './manage-reviews/manage-reviews.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { PCampaignComponent } from './p-campaign/p-campaign.component';
import { PBundlesComponent } from './p-bundles/p-bundles.component';
import { PSellerVoucherComponent } from './p-seller-voucher/p-seller-voucher.component';
import { PPromotionDetailComponent } from './p-promotion-detail/p-promotion-detail.component';
import { AddVoucherComponent } from './add-voucher/add-voucher.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    SimplePageRoutingModule,
    RouterModule.forChild(LayoutRoutes),
    SharedModule,
    ChartModule,
    CMaterialModule
  ],
  declarations: [
    SimplePageComponent,
    EcommerceComponent,
    FrmValidationComponent,
    TblDatatableComponent,
    SapvaiiiComponent,
    SLoginpagesComponent,
    ManageProductsComponent,
    PProductComponent,
    AddProductFromComponent,
    ManageOrdersComponent,
    OrdersReviewsComponent,
    ManageReviewsComponent,
    PromotionsComponent,
    PCampaignComponent,
    PBundlesComponent,
    PSellerVoucherComponent,
    PPromotionDetailComponent,
    AddVoucherComponent
  ]
})
export class SimplePageModule { }
