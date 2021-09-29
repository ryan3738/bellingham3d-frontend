/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: USER_CART_QUERY
// ====================================================

export interface USER_CART_QUERY_cartItems_product {
  __typename: "Product";
  id: string;
}

export interface USER_CART_QUERY_cartItems_variants_option {
  __typename: "Option";
  id: string;
}

export interface USER_CART_QUERY_cartItems_variants {
  __typename: "Variant";
  id: string;
  option: USER_CART_QUERY_cartItems_variants_option | null;
}

export interface USER_CART_QUERY_cartItems {
  __typename: "CartItem";
  id: string;
  quantity: number | null;
  product: USER_CART_QUERY_cartItems_product | null;
  variants: USER_CART_QUERY_cartItems_variants[] | null;
}

export interface USER_CART_QUERY {
  cartItems: USER_CART_QUERY_cartItems[] | null;
}

export interface USER_CART_QUERYVariables {
  id: string;
}
