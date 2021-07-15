import { Routes, RouterModule } from '@angular/router';

import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { FrmValidationComponent } from './frm-validation/frm-validation.component';
import { TblDatatableComponent } from './tbl-datatable/tbl-datatable.component';
import { SapvaiiiComponent } from './sapvaiii/sapvaiii.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { PProductComponent } from './p-product/p-product.component';
import { AddProductFromComponent } from './add-product-from/add-product-from.component';
// Oreder Reviews
import { OrdersReviewsComponent } from './orders-reviews/orders-reviews.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { ManageReviewsComponent } from './manage-reviews/manage-reviews.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { PCampaignComponent } from './p-campaign/p-campaign.component';
import { PBundlesComponent } from './p-bundles/p-bundles.component';
import { PSellerVoucherComponent } from './p-seller-voucher/p-seller-voucher.component';
import { PPromotionDetailComponent } from './p-promotion-detail/p-promotion-detail.component';
import { AddVoucherComponent } from './add-voucher/add-voucher.component';
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


export const LayoutRoutes: Routes = [
  
  { path: 'dashboard',            component: EcommerceComponent,
    data: {
      title: 'Dashboard',
      icon: 'icon-layout-sidebar-left',
      caption: 'Simple text',
      status: true
    } 
},
  { path: 'frm-validation',            component: FrmValidationComponent,
  data: {
    title: 'Validation',
    icon: 'icon-layout-sidebar-left',
    caption: 'Validation are goes here',
    status: true
  } 
},
  { path: 'data-table',            component: TblDatatableComponent },
  { path: 'sap',            component: SapvaiiiComponent },

// Product 
  { path: 'products',            component: PProductComponent },
  { path: 'products/manage-products',            component: ManageProductsComponent,
    data: {
      title: 'Products - Manage-Products',
      icon: 'icon-layout-sidebar-left',
      caption: 'Manage Products are goes here',
      status: true
    } 
  },

  { path: 'products/add-product-from',            component: AddProductFromComponent,
    data: {
      title: 'Products - Manage-Products - Add Product From',
      icon: 'icon-layout-sidebar-left',
      caption: 'Manage Products are goes here',
      status: true
    } 
  },
  // Manage Order
  { path: 'orders-review',            component: OrdersReviewsComponent },
  { path: 'orders-review/manage-orders',            component: ManageOrdersComponent,
    data: {
      title: 'Products - Manage-Products - Add Product From',
      icon: 'icon-layout-sidebar-left',
      caption: 'Manage Products are goes here',
      status: true
    } 
  },
  { path: 'orders-review/manage-reviews',            component: ManageReviewsComponent,
    data: {
      title: 'Products - Manage-Products - Add Product From',
      icon: 'icon-layout-sidebar-left',
      caption: 'Manage Products are goes here',
      status: true
    } 
  },
  // Manage Order
  { path: 'promotions',            component: PromotionsComponent,

  data: {
    title: 'Products - Manage-Products - Add Product From',
    icon: 'icon-layout-sidebar-left',
    caption: 'Manage Products are goes here',
    status: true
  } 
},
  { path: 'promotions/campaign',            component: PCampaignComponent,
  data: {
    title: 'Products - Manage-Products - Add Product From',
    icon: 'icon-layout-sidebar-left',
    caption: 'Manage Products are goes here',
    status: true
  } 
},
  { path: 'promotions/bundles',            component: PBundlesComponent,
  data: {
    title: 'Products - Manage-Products - Add Product From',
    icon: 'icon-layout-sidebar-left',
    caption: 'Manage Products are goes here',
    status: true
  } 
},
  { path: 'promotions/seller-voucher',            component: PSellerVoucherComponent,
  data: {
    title: 'Products - Manage-Products - Add Product From',
    icon: 'icon-layout-sidebar-left',
    caption: 'Manage Products are goes here',
    status: true
  } 
},
  { path: 'promotions/promotion-detail',            component: PPromotionDetailComponent,
  data: {
    title: 'Products - Manage-Products - Add Product From',
    icon: 'icon-layout-sidebar-left',
    caption: 'Manage Products are goes here',
    status: true
  } 
},
  { path: 'promotions/add-voucher',            component: AddVoucherComponent,
  data: {
    title: 'Products - Manage-Products - Add Product From',
    icon: 'icon-layout-sidebar-left',
    caption: 'Manage Products are goes here',
    status: true
  } 
},


// Growth Center 
  
  { path: 'growthcenter', component: GrowthCenterComponent},
  
  { path: 'growthcenter/policy-compliance', component: PolicyComplianceComponent,
    data: {
      title: 'Products - Manage-Products - Add Product From',
      icon: 'icon-layout-sidebar-left',
      caption: 'Manage Products are goes here',
      status: true
    } 
  },
  { path: 'policy-compliance-summary', component: PolicyComplianceSummaryComponent,
    data: {
      title: 'Products - Manage-Products - Add Product From',
      icon: 'icon-layout-sidebar-left',
      caption: 'Manage Products are goes here',
      status: true
    } 
  },

  // BusinessAdvisorComponent
  { path: 'business-advisor', component: BusinessAdvisorComponent,
    data: {
      title: 'Products - Manage-Products - Add Product From',
      icon: 'icon-layout-sidebar-left',
      caption: 'Manage Products are goes here',
      status: true
    } 
  },

  // FinanceComponent
  { path: 'finance', component: FinanceComponent,
    data: {
      title: 'Products - Manage-Products - Add Product From',
      icon: 'icon-layout-sidebar-left',
      caption: 'Manage Products are goes here',
      status: true
    } 
  },
  { path: 'finance/account-statement', component: FAccountStatementComponent,
    data: {
      title: 'Products - Manage-Products - Add Product From',
      icon: 'icon-layout-sidebar-left',
      caption: 'Manage Products are goes here',
      status: true
    } 
  },
  { path: 'finance/order-overview', component: FOrderOverviewComponent,
    data: {
      title: 'Products - Manage-Products - Add Product From',
      icon: 'icon-layout-sidebar-left',
      caption: 'Manage Products are goes here',
      status: true
    } 
  },
  { path: 'finance/transaction-overview', component: FTransactionOverviewComponent,
    data: {
      title: 'Products - Manage-Products - Add Product From',
      icon: 'icon-layout-sidebar-left',
      caption: 'Manage Products are goes here',
      status: true
    } 
  },

  // SellerSupportComponent
  { path: 'seller-support', component: SellerSupportComponent,
    data: {
      title: 'Products - Manage-Products - Add Product From',
      icon: 'icon-layout-sidebar-left',
      caption: 'Manage Products are goes here',
      status: true
    } 
  },
  { path: 'seller-support/contact-us', component: SContactUsComponent,
    data: {
      title: 'Products - Manage-Products - Add Product From',
      icon: 'icon-layout-sidebar-left',
      caption: 'Manage Products are goes here',
      status: true
    } 
  },
  // AccountAettingsComponent
  { path: 'account-settings', component: AccountAettingsComponent,
    data: {
      title: 'Products - Manage-Products - Add Product From',
      icon: 'icon-layout-sidebar-left',
      caption: 'Manage Products are goes here',
      status: true
    } 
  },
  { path: 'account-settings/profile', component: AProfileComponent,
    data: {
      title: 'Products - Manage-Products - Add Product From',
      icon: 'icon-layout-sidebar-left',
      caption: 'Manage Products are goes here',
      status: true
    } 
  },
  { path: 'account-settings/manage-users', component: AManageUsersComponent,
    data: {
      title: 'Products - Manage-Products - Add Product From',
      icon: 'icon-layout-sidebar-left',
      caption: 'Manage Products are goes here',
      status: true
    } 
  },
  { path: 'account-settings/account-settings', component: AAccountSettingsComponent,
    data: {
      title: 'Products - Manage-Products - Add Product From',
      icon: 'icon-layout-sidebar-left',
      caption: 'Manage Products are goes here',
      status: true
    } 
  },
  
];
