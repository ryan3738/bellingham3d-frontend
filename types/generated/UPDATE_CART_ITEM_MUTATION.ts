/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_CART_ITEM_MUTATION
// ====================================================

export interface UPDATE_CART_ITEM_MUTATION_updateCartItem {
  __typename: "CartItem";
  id: string;
  quantity: number | null;
}

export interface UPDATE_CART_ITEM_MUTATION {
  updateCartItem: UPDATE_CART_ITEM_MUTATION_updateCartItem | null;
}

export interface UPDATE_CART_ITEM_MUTATIONVariables {
  id: string;
  quantity?: number | null;
}
