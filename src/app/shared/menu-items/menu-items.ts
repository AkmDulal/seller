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
          }, {
            state: 'add-product-from',
            name: 'Media center',
            type: 'link',

          }
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

      // Store Decoration
      {
        state: '',
        short_label: 'M',
        name: 'Store Decoration',
        type: 'sub',
        icon: 'fa fa-hdd-o',
        children: [
          {
            state: '',
            name: 'Campaign',
            target: true
          }, {
            state: '',
            name: 'Bundles',
            target: true
          },
          {
            state: '',
            name: 'Seller Voucher',
            target: true
          },
          {
            state: '',
            name: 'Seller Picks',
            target: true
          }
        ]
      },

      // Growth Center
      {
        state: '',
        short_label: 'M',
        name: 'Growth Center',
        type: 'sub',
        icon: 'icon-direction-alt',
        children: [
          {
            state: '',
            name: 'Growth Center',
            target: true
          }
        ]
      },

      // Business Advisor

      {
        state: '',
        short_label: 'S',
        name: 'Business Advisor',
        type: 'link',
        icon: 'fa fa-briefcase'
      },

      // Finance
      {
        state: '',
        short_label: 'M',
        name: 'Finance',
        type: 'sub',
        icon: 'fa fa-hand-o-right',
        children: [
          {
            state: '',
            name: 'Account Statement',
            target: true
          },
          {
            state: '',
            name: 'Order Overview',
            target: true
          },
          {
            state: '',
            name: 'Transaction Overview',
            target: true
          }
        ]
      },


      // Infotech University
      {
        state: '',
        short_label: 'M',
        name: 'Finance',
        type: 'link',
        icon: 'fa fa-usd'
      },


      // Seller Support
      {
        state: '',
        short_label: 'M',
        name: 'Seller Support',
        type: 'sub',
        icon: 'fa fa-sellsy',
        children: [
          {
            state: '',
            name: 'Help Center',
            target: true
          },
          {
            state: '',
            name: 'Contact Us',
            target: true
          }
        ]
      },

      // Account & Settings
      {
        state: '',
        short_label: 'M',
        name: 'Account & Settings',
        type: 'sub',
        icon: 'fa fa-assistive-listening-systems',
        children: [
          {
            state: '',
            name: 'Profile',
            target: true
          },
          {
            state: '',
            name: 'Manage Users',
            target: true
          },
          {
            state: '',
            name: 'Account Settings',
            target: true
          },
          {
            state: '',
            name: 'Chat Settings',
            target: true
          }
        ]
      },



     

      
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
