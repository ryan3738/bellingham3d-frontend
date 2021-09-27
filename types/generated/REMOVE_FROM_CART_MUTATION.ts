/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: REMOVE_FROM_CART_MUTATION
// ====================================================

export interface REMOVE_FROM_CART_MUTATION_deleteCartItem {
  __typename: "CartItem";
  id: string;
}

export interface REMOVE_FROM_CART_MUTATION {
  deleteCartItem: REMOVE_FROM_CART_MUTATION_deleteCartItem | null;
}

export interface REMOVE_FROM_CART_MUTATIONVariables {
  id: string;
}
