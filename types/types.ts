/* eslint-disable camelcase */
/* eslint no-use-before-define: "off" */

import {
  CURRENT_USER_QUERY_authenticatedItem,
  CURRENT_USER_QUERY_authenticatedItem_cart,
} from './generated/CURRENT_USER_QUERY';
import { ALL_PRODUCTS_QUERY_products } from './generated/ALL_PRODUCTS_QUERY';
import { SINGLE_ADDRESS_QUERY_customerAddress } from './generated/SINGLE_ADDRESS_QUERY';
import { SINGLE_PRODUCT_QUERY_product } from './generated/SINGLE_PRODUCT_QUERY';
import {
  USER_ORDERS_QUERY_orders,
  USER_ORDERS_QUERY_orders_items,
} from './generated/USER_ORDERS_QUERY';

export type AddressType = SINGLE_ADDRESS_QUERY_customerAddress;

export type CartItemType = CURRENT_USER_QUERY_authenticatedItem_cart;

export type Role = {
  id: string;
  name: string;
  canManageProducts: boolean;
  canSeeOtherUsers: boolean;
  canManageUsers: boolean;
  canManageRoles: boolean;
  canManageCart: boolean;
  canManageOrders: boolean;
  assignedTo: UserType[];
};

export type UserType = CURRENT_USER_QUERY_authenticatedItem;

export type CloudinaryImage = {
  publicUrlTransformed: string;
};

export type ProductImage = {
  id: string;
  image: {
    publicUrlTransformed: string;
  };
  altText: string;
  createdAt: string;
};

export type Option = {
  id: string;
  name?: string;
  description?: string;
};

export type Variant = {
  id: string;
  name: string;
  option?: Option;
  description?: string;
};

// type InventoryItem = {
//   id: string;
//   price: number;
//   requiresShipping: boolean;
//   tracked: boolean;
//   quantity: number;
//   allowBackorder: boolean;
// };

// type Category = {
//   id: string;
//   name: string;
//   description: string;
// };

// export type Product = {
//   id: string;
//   name: string;
//   description: string;
//   images: ProductImage[];
//   status: string;
//   price: number;
//   category: Category[];
//   inventoryItem: InventoryItem;
//   variants: Variant[];
//   createdAt: string;
//   user: UserType;
// };

export type ProductType = SINGLE_PRODUCT_QUERY_product;

export type AllProductsType = ALL_PRODUCTS_QUERY_products;

export type OrderItemType = USER_ORDERS_QUERY_orders_items;

export type Order = USER_ORDERS_QUERY_orders;

export type SelectVariantType = (parameters: {
  option: Option;
  variant: Variant;
}) => void;
