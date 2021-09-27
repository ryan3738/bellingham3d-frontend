/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SINGLE_ADDRESS_QUERY
// ====================================================

export interface SINGLE_ADDRESS_QUERY_customerAddress_isDefaultShipping {
  __typename: "User";
  id: string;
}

export interface SINGLE_ADDRESS_QUERY_customerAddress {
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
  isDefaultShipping: SINGLE_ADDRESS_QUERY_customerAddress_isDefaultShipping | null;
}

export interface SINGLE_ADDRESS_QUERY {
  customerAddress: SINGLE_ADDRESS_QUERY_customerAddress | null;
}

export interface SINGLE_ADDRESS_QUERYVariables {
  id: string;
}
