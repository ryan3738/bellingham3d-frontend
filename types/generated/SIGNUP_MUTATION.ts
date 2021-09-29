/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SIGNUP_MUTATION
// ====================================================

export interface SIGNUP_MUTATION_createUser {
  __typename: "User";
  id: string;
  email: string | null;
  name: string | null;
}

export interface SIGNUP_MUTATION {
  createUser: SIGNUP_MUTATION_createUser | null;
}

export interface SIGNUP_MUTATIONVariables {
  email: string;
  name: string;
  password: string;
}
