/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DELETE_ADDRESS_MUTATION
// ====================================================

export interface DELETE_ADDRESS_MUTATION_deleteCustomerAddress {
  __typename: "CustomerAddress";
  id: string;
  firstName: string | null;
}

export interface DELETE_ADDRESS_MUTATION {
  deleteCustomerAddress: DELETE_ADDRESS_MUTATION_deleteCustomerAddress | null;
}

export interface DELETE_ADDRESS_MUTATIONVariables {
  id: string;
}
