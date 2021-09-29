/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PasswordResetRequestErrorCode } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: REQUEST_RESET_MUTATION
// ====================================================

export interface REQUEST_RESET_MUTATION_sendUserPasswordResetLink {
  __typename: "SendUserPasswordResetLinkResult";
  code: PasswordResetRequestErrorCode;
  message: string;
}

export interface REQUEST_RESET_MUTATION {
  sendUserPasswordResetLink: REQUEST_RESET_MUTATION_sendUserPasswordResetLink | null;
}

export interface REQUEST_RESET_MUTATIONVariables {
  email: string;
}
