/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: USER_ADDRESSES_QUERY
// ====================================================

export interface USER_ADDRESSES_QUERY_customerAddresses_isDefaultShipping {
  __typename: "User";
  id: string;
}

export interface USER_ADDRESSES_QUERY_customerAddresses {
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
  isDefaultShipping: USER_ADDRESSES_QUERY_customerAddresses_isDefaultShipping | null;
}

export interface USER_ADDRESSES_QUERY {
  customerAddresses: USER_ADDRESSES_QUERY_customerAddresses[] | null;
}
