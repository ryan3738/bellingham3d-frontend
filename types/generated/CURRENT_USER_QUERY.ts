/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CURRENT_USER_QUERY
// ====================================================

export interface CURRENT_USER_QUERY_authenticatedItem_defaultShipping_isDefaultShipping {
  __typename: "User";
  id: string;
}

export interface CURRENT_USER_QUERY_authenticatedItem_defaultShipping {
  __typename: "CustomerAddress";
  id: string;
  firstName: string | null;
  lastName: string | null;
  company: string | null;
  address1: string | null;
  address2: string | null;
  city: string | null;
  region: string | null;
  country: string | null;
  zip: string | null;
  phone: string | null;
  isDefaultShipping: CURRENT_USER_QUERY_authenticatedItem_defaultShipping_isDefaultShipping | null;
}

export interface CURRENT_USER_QUERY_authenticatedItem_cart_product_images_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface CURRENT_USER_QUERY_authenticatedItem_cart_product_images {
  __typename: "ProductImage";
  image: CURRENT_USER_QUERY_authenticatedItem_cart_product_images_image | null;
}

export interface CURRENT_USER_QUERY_authenticatedItem_cart_product_inventoryItem {
  __typename: "InventoryItem";
  id: string;
  requiresShipping: boolean | null;
}

export interface CURRENT_USER_QUERY_authenticatedItem_cart_product {
  __typename: "Product";
  id: string;
  name: string | null;
  price: number | null;
  description: string | null;
  images: CURRENT_USER_QUERY_authenticatedItem_cart_product_images[] | null;
  inventoryItem: CURRENT_USER_QUERY_authenticatedItem_cart_product_inventoryItem | null;
}

export interface CURRENT_USER_QUERY_authenticatedItem_cart_variants_option {
  __typename: "Option";
  name: string | null;
}

export interface CURRENT_USER_QUERY_authenticatedItem_cart_variants {
  __typename: "Variant";
  name: string | null;
  option: CURRENT_USER_QUERY_authenticatedItem_cart_variants_option | null;
}

export interface CURRENT_USER_QUERY_authenticatedItem_cart {
  __typename: "CartItem";
  id: string;
  quantity: number | null;
  product: CURRENT_USER_QUERY_authenticatedItem_cart_product | null;
  variants: CURRENT_USER_QUERY_authenticatedItem_cart_variants[] | null;
}

export interface CURRENT_USER_QUERY_authenticatedItem_role {
  __typename: "Role";
  canManageProducts: boolean | null;
}

export interface CURRENT_USER_QUERY_authenticatedItem {
  __typename: "User";
  id: string;
  email: string | null;
  name: string | null;
  defaultShipping: CURRENT_USER_QUERY_authenticatedItem_defaultShipping | null;
  cart: CURRENT_USER_QUERY_authenticatedItem_cart[] | null;
  role: CURRENT_USER_QUERY_authenticatedItem_role | null;
}

export interface CURRENT_USER_QUERY {
  authenticatedItem: CURRENT_USER_QUERY_authenticatedItem | null;
}
