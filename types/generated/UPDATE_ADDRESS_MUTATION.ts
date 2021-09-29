/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserRelateToOneForUpdateInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UPDATE_ADDRESS_MUTATION
// ====================================================

export interface UPDATE_ADDRESS_MUTATION_updateCustomerAddress_isDefaultShipping {
  __typename: "User";
  id: string;
}

export interface UPDATE_ADDRESS_MUTATION_updateCustomerAddress {
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
  isDefaultShipping: UPDATE_ADDRESS_MUTATION_updateCustomerAddress_isDefaultShipping | null;
}

export interface UPDATE_ADDRESS_MUTATION {
  updateCustomerAddress: UPDATE_ADDRESS_MUTATION_updateCustomerAddress | null;
}

export interface UPDATE_ADDRESS_MUTATIONVariables {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  company?: string | null;
  address1?: string | null;
  address2?: string | null;
  city?: string | null;
  region?: string | null;
  country?: string | null;
  zip?: string | null;
  phone?: string | null;
  isDefaultShipping?: UserRelateToOneForUpdateInput | null;
}
