/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CREATE_ORDER_MUTATION
// ====================================================

export interface CREATE_ORDER_MUTATION_checkout_items {
  __typename: "OrderItem";
  id: string;
  name: string | null;
}

export interface CREATE_ORDER_MUTATION_checkout {
  __typename: "Order";
  id: string;
  charge: string | null;
  total: number | null;
  items: CREATE_ORDER_MUTATION_checkout_items[] | null;
}

export interface CREATE_ORDER_MUTATION {
  checkout: CREATE_ORDER_MUTATION_checkout | null;
}

export interface CREATE_ORDER_MUTATIONVariables {
  token: string;
  shippingId?: string | null;
}
