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
  
];
