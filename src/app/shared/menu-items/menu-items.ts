import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'dashboard',
        short_label: 'S',
        name: 'Dashboard',
        type: 'link',
        icon: 'fa fa-home'
      },

      // Products
      {
        state: 'products',
        short_label: 'M',
        name: 'Products',
        type: 'sub',
        icon: 'fa fa-paper-plane',
        children: [
          {
            state: 'manage-products',
            name: 'Manage products',
            type: 'link',
          }, 
          
          // {
          //   state: 'add-product-from',
          //   name: 'Media center',
          //   type: 'link',

          // }
        ]
      }, 

      // Orders & Reviews
      {
        state: 'orders-review',
        short_label: 'M',
        name: 'Orders & Reviews',
        type: 'sub',
        icon: 'fa fa-first-order',
        children: [
          {
            state: 'manage-orders',
            name: 'Manage Orders',
            type: 'link'
          }, {
            state: 'manage-reviews',
            name: 'Manage Reviews',
            type: 'link'
          }
        ]
      },


      // Promotions
      {
        state: 'promotions',
        short_label: 'M',
        name: 'Promotions',
        type: 'sub',
        icon: 'fa fa-vine',
        children: [
          {
            state: 'campaign',
            name: 'Campaign',
            type: 'link'
          }, {
            state: 'bundles',
            name: 'Bundles',
            type: 'link'
          },
          {
            state: 'seller-voucher',
            name: 'Seller Voucher',
            type: 'link'
          }
        ]
      },



      // Growth Center
      {
        state: 'growthcenter',
        short_label: 'M',
        name: 'Growth Center',
        type: 'sub',
        icon: 'icon-direction-alt',
        children: [
          {
            state: 'policy-compliance',
            name: 'Policy Compliance',
            type: 'link'
          }
        ]
      },

      // Business Advisor

      {
        state: 'business-advisor',
        short_label: 'S',
        name: 'Business Advisor',
        type: 'link',
        icon: 'fa fa-briefcase'
      },

      // Finance
      {
        state: 'finance',
        short_label: 'M',
        name: 'Finance',
        type: 'sub',
        icon: 'fa fa-hand-o-right',
        children: [
          {
            state: 'account-statement',
            name: 'Account Statement',
            type: 'link'
          },
          {
            state: 'order-overview',
            name: 'Order Overview',
            type: 'link'
          },
          {
            state: 'transaction-overview',
            name: 'Transaction Overview',
            type: 'link'
          }
        ]
      },


      // Infotech University
      // {
      //   state: '',
      //   short_label: 'M',
      //   name: 'Finance',
      //   type: 'link',
      //   icon: 'fa fa-usd'
      // },


      // Seller Support
      {
        state: 'seller-support',
        short_label: 'M',
        name: 'Seller Support',
        type: 'sub',
        icon: 'fa fa-sellsy',
        children: [
          {
            state: 'contact-us',
            name: 'Contact Us',
            type: 'link'
          }
        ]
      },

      // Account & Settings
      {
        state: 'account-settings',
        short_label: 'M',
        name: 'Account & Settings',
        type: 'sub',
        icon: 'fa fa-assistive-listening-systems',
        children: [
          {
            state: 'profile',
            name: 'Profile',
            type: 'link'
          },
          {
            state: 'manage-users',
            name: 'Manage Users',
            type: 'link'
          },
          {
            state: 'account-settings',
            name: 'Account Settings',
            type: 'link'
          }
        ]
      },

      // Seller Documents
      // {
      //   state: '',
      //   short_label: 'M',
      //   name: 'Seller Documents',
      //   type: 'sub',
      //   icon: 'fa fa-assistive-listening-systems',
      //   children: [
      //     {
      //       state: 'profile',
      //       name: 'Profile',
      //       type: 'link'
      //     }
      //   ]
      // },



     

      
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
