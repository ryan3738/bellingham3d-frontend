/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ADD_TO_CART_MUTATION
// ====================================================

export interface ADD_TO_CART_MUTATION_addToCart {
  __typename: "CartItem";
  id: string;
}

export interface ADD_TO_CART_MUTATION {
  addToCart: ADD_TO_CART_MUTATION_addToCart | null;
}

export interface ADD_TO_CART_MUTATIONVariables {
  id: string;
  variantIds?: (string | null)[] | null;
}
