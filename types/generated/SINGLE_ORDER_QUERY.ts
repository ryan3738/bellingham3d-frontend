/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SINGLE_ORDER_QUERY
// ====================================================

export interface SINGLE_ORDER_QUERY_order_items_image_image {
  __typename: "CloudinaryImage_File";
  id: string | null;
  publicUrlTransformed: string | null;
}

export interface SINGLE_ORDER_QUERY_order_items_image {
  __typename: "ProductImage";
  id: string;
  image: SINGLE_ORDER_QUERY_order_items_image_image | null;
  altText: string | null;
}

export interface SINGLE_ORDER_QUERY_order_items {
  __typename: "OrderItem";
  id: string;
  name: string | null;
  description: string | null;
  price: number | null;
  quantity: number | null;
  variants: string | null;
  image: SINGLE_ORDER_QUERY_order_items_image | null;
}

export interface SINGLE_ORDER_QUERY_order_shippingAddress {
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
}

export interface SINGLE_ORDER_QUERY_order {
  __typename: "Order";
  id: string;
  charge: string | null;
  total: number | null;
  createdAt: string | null;
  items: SINGLE_ORDER_QUERY_order_items[] | null;
  shippingAddress: SINGLE_ORDER_QUERY_order_shippingAddress | null;
}

export interface SINGLE_ORDER_QUERY {
  order: SINGLE_ORDER_QUERY_order | null;
}

export interface SINGLE_ORDER_QUERYVariables {
  id: string;
}
