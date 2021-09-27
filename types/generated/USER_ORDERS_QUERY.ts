/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: USER_ORDERS_QUERY
// ====================================================

export interface USER_ORDERS_QUERY_orders_items_image_image {
  __typename: "CloudinaryImage_File";
  id: string | null;
  publicUrlTransformed: string | null;
}

export interface USER_ORDERS_QUERY_orders_items_image {
  __typename: "ProductImage";
  id: string;
  image: USER_ORDERS_QUERY_orders_items_image_image | null;
  altText: string | null;
}

export interface USER_ORDERS_QUERY_orders_items {
  __typename: "OrderItem";
  id: string;
  name: string | null;
  description: string | null;
  price: number | null;
  quantity: number | null;
  image: USER_ORDERS_QUERY_orders_items_image | null;
}

export interface USER_ORDERS_QUERY_orders {
  __typename: "Order";
  id: string;
  charge: string | null;
  total: number | null;
  items: USER_ORDERS_QUERY_orders_items[] | null;
}

export interface USER_ORDERS_QUERY {
  orders: USER_ORDERS_QUERY_orders[] | null;
}
