/* eslint-disable camelcase */
/* eslint no-use-before-define: "off" */

import { ALL_PRODUCTS_QUERY_products } from './generated/ALL_PRODUCTS_QUERY';
import { SINGLE_ADDRESS_QUERY_customerAddress } from './generated/SINGLE_ADDRESS_QUERY';

export type AddressType = SINGLE_ADDRESS_QUERY_customerAddress;

export type CartItem = {
  id: string;
  quantity?: number;
  product?: ProductType;
  productId?: string;
  variants: Variant[];
  saveForLater?: boolean;
  createdAt?: string;
  user?: User;
  userId?: string;
};

export type Role = {
  id: string;
  name: string;
  canManageProducts: boolean;
  canSeeOtherUsers: boolean;
  canManageUsers: boolean;
  canManageRoles: boolean;
  canManageCart: boolean;
  canManageOrders: boolean;
  assignedTo: User[];
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  addresses: AddressType[];
  defaultShipping: AddressType;
  cart: CartItem[];
  role: Role;
  createdAt: string;
};

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

type InventoryItem = {
  id: string;
  price: number;
  requiresShipping: boolean;
  tracked: boolean;
  quantity: number;
  allowBackorder: boolean;
};

type Category = {
  id: string;
  name: string;
  description: string;
};

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
//   user: User;
// };

export type ProductType = ALL_PRODUCTS_QUERY_products;

export type OrderItem = {
  id: string;
  name: string;
  variants: string;
  description: string;
  image: ProductImage;
  imageId: string;
  price: number;
  quantity: number;
  order: Order;
  orderId: string;
};

export type Order = {
  id: string;
  total: number;
  items: OrderItem[];
  user: User;
  userId: string;
  charge: string;
  shippingAddress: AddressType;
  shippingAddressId: string;
  createdAt: string;
};

export type SelectVariantType = (parameters: {
  option: Option;
  variant: Variant;
}) => void;
