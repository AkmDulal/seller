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

import { SimpleScrollSpyModule } from "angular-simple-scroll-spy";
import {TinymceModule} from 'angular2-tinymce';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { PolicyComplianceComponent } from './policy-compliance/policy-compliance.component';
import { GrowthCenterComponent } from './growth-center/growth-center.component';
import { PolicyComplianceSummaryComponent } from './policy-compliance-summary/policy-compliance-summary.component';
import { BusinessAdvisorComponent } from './business-advisor/business-advisor.component';
import { FinanceComponent } from './finance/finance.component';
import { FAccountStatementComponent } from './f-account-statement/f-account-statement.component';
import { FOrderOverviewComponent } from './f-order-overview/f-order-overview.component';
import { FTransactionOverviewComponent } from './f-transaction-overview/f-transaction-overview.component';
import { SellerSupportComponent } from './seller-support/seller-support.component';
import { SContactUsComponent } from './s-contact-us/s-contact-us.component';
import { AccountAettingsComponent } from './account-aettings/account-aettings.component';
import { AProfileComponent } from './a-profile/a-profile.component';
import { AManageUsersComponent } from './a-manage-users/a-manage-users.component';
import { AAccountSettingsComponent } from './a-account-settings/a-account-settings.component';


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
    CMaterialModule,
    SimpleScrollSpyModule,
    TinymceModule,
    NgxSliderModule
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
    AddVoucherComponent,
    PolicyComplianceComponent,
    GrowthCenterComponent,
    PolicyComplianceSummaryComponent,
    BusinessAdvisorComponent,
    FinanceComponent,
    FAccountStatementComponent,
    FOrderOverviewComponent,
    FTransactionOverviewComponent,
    SellerSupportComponent,
    SContactUsComponent,
    AccountAettingsComponent,
    AProfileComponent,
    AManageUsersComponent,
    AAccountSettingsComponent
  ]
})
export class SimplePageModule { }
