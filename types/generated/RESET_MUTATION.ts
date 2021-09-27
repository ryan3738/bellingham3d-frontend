/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PasswordResetRedemptionErrorCode } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: RESET_MUTATION
// ====================================================

export interface RESET_MUTATION_redeemUserPasswordResetToken {
  __typename: "RedeemUserPasswordResetTokenResult";
  code: PasswordResetRedemptionErrorCode;
  message: string;
}

export interface RESET_MUTATION {
  redeemUserPasswordResetToken: RESET_MUTATION_redeemUserPasswordResetToken | null;
}

export interface RESET_MUTATIONVariables {
  email: string;
  password: string;
  token: string;
}
