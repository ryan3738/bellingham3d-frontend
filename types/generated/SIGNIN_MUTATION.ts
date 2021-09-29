/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PasswordAuthErrorCode } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SIGNIN_MUTATION
// ====================================================

export interface SIGNIN_MUTATION_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess_item {
  __typename: "User";
  id: string;
  email: string | null;
  name: string | null;
}

export interface SIGNIN_MUTATION_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess {
  __typename: "UserAuthenticationWithPasswordSuccess";
  item: SIGNIN_MUTATION_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess_item;
}

export interface SIGNIN_MUTATION_authenticateUserWithPassword_UserAuthenticationWithPasswordFailure {
  __typename: "UserAuthenticationWithPasswordFailure";
  code: PasswordAuthErrorCode;
  message: string;
}

export type SIGNIN_MUTATION_authenticateUserWithPassword = SIGNIN_MUTATION_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess | SIGNIN_MUTATION_authenticateUserWithPassword_UserAuthenticationWithPasswordFailure;

export interface SIGNIN_MUTATION {
  authenticateUserWithPassword: SIGNIN_MUTATION_authenticateUserWithPassword;
}

export interface SIGNIN_MUTATIONVariables {
  email: string;
  password: string;
}
