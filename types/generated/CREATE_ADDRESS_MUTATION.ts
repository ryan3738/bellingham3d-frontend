/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserRelateToOneForCreateInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CREATE_ADDRESS_MUTATION
// ====================================================

export interface CREATE_ADDRESS_MUTATION_createCustomerAddress_isDefaultShipping {
  __typename: "User";
  id: string;
}

export interface CREATE_ADDRESS_MUTATION_createCustomerAddress {
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
  isDefaultShipping: CREATE_ADDRESS_MUTATION_createCustomerAddress_isDefaultShipping | null;
}

export interface CREATE_ADDRESS_MUTATION {
  createCustomerAddress: CREATE_ADDRESS_MUTATION_createCustomerAddress | null;
}

export interface CREATE_ADDRESS_MUTATIONVariables {
  firstName: string;
  lastName?: string | null;
  company?: string | null;
  address1: string;
  address2?: string | null;
  city: string;
  region: string;
  country: string;
  zip: string;
  phone?: string | null;
  isDefaultShipping?: UserRelateToOneForCreateInput | null;
}
