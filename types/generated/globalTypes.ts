/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum PasswordAuthErrorCode {
  FAILURE = "FAILURE",
  IDENTITY_NOT_FOUND = "IDENTITY_NOT_FOUND",
  MULTIPLE_IDENTITY_MATCHES = "MULTIPLE_IDENTITY_MATCHES",
  SECRET_MISMATCH = "SECRET_MISMATCH",
  SECRET_NOT_SET = "SECRET_NOT_SET",
}

export enum PasswordResetRedemptionErrorCode {
  FAILURE = "FAILURE",
  IDENTITY_NOT_FOUND = "IDENTITY_NOT_FOUND",
  MULTIPLE_IDENTITY_MATCHES = "MULTIPLE_IDENTITY_MATCHES",
  TOKEN_EXPIRED = "TOKEN_EXPIRED",
  TOKEN_MISMATCH = "TOKEN_MISMATCH",
  TOKEN_NOT_SET = "TOKEN_NOT_SET",
  TOKEN_REDEEMED = "TOKEN_REDEEMED",
}

export enum PasswordResetRequestErrorCode {
  IDENTITY_NOT_FOUND = "IDENTITY_NOT_FOUND",
  MULTIPLE_IDENTITY_MATCHES = "MULTIPLE_IDENTITY_MATCHES",
}

export interface CartItemCreateInput {
  quantity?: number | null;
  product?: ProductRelateToOneForCreateInput | null;
  variants?: VariantRelateToManyForCreateInput | null;
  saveForLater?: boolean | null;
  createdAt?: string | null;
  user?: UserRelateToOneForCreateInput | null;
}

export interface CartItemRelateToManyForCreateInput {
  create?: CartItemCreateInput[] | null;
  connect?: CartItemWhereUniqueInput[] | null;
}

export interface CartItemWhereUniqueInput {
  id?: string | null;
}

export interface CategoryCreateInput {
  name?: string | null;
  description?: string | null;
  product?: ProductRelateToManyForCreateInput | null;
}

export interface CategoryRelateToManyForCreateInput {
  create?: CategoryCreateInput[] | null;
  connect?: CategoryWhereUniqueInput[] | null;
}

export interface CategoryWhereUniqueInput {
  id?: string | null;
}

export interface CustomerAddressCreateInput {
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
  createdAt?: string | null;
  user?: UserRelateToOneForCreateInput | null;
  isDefaultShipping?: UserRelateToOneForCreateInput | null;
  isDefaultBilling?: UserRelateToOneForCreateInput | null;
  orderShippingAddress?: OrderRelateToManyForCreateInput | null;
}

export interface CustomerAddressRelateToManyForCreateInput {
  create?: CustomerAddressCreateInput[] | null;
  connect?: CustomerAddressWhereUniqueInput[] | null;
}

export interface CustomerAddressRelateToOneForCreateInput {
  create?: CustomerAddressCreateInput | null;
  connect?: CustomerAddressWhereUniqueInput | null;
}

export interface CustomerAddressWhereUniqueInput {
  id?: string | null;
}

export interface InventoryItemCreateInput {
  price?: number | null;
  requiresShipping?: boolean | null;
  tracked?: boolean | null;
  quantity?: number | null;
  allowBackorder?: boolean | null;
  product?: ProductRelateToOneForCreateInput | null;
}

export interface InventoryItemRelateToOneForCreateInput {
  create?: InventoryItemCreateInput | null;
  connect?: InventoryItemWhereUniqueInput | null;
}

export interface InventoryItemWhereUniqueInput {
  id?: string | null;
}

export interface OptionCreateInput {
  name?: string | null;
  description?: string | null;
  variants?: VariantRelateToManyForCreateInput | null;
}

export interface OptionRelateToOneForCreateInput {
  create?: OptionCreateInput | null;
  connect?: OptionWhereUniqueInput | null;
}

export interface OptionWhereUniqueInput {
  id?: string | null;
}

export interface OrderCreateInput {
  total?: number | null;
  items?: OrderItemRelateToManyForCreateInput | null;
  user?: UserRelateToOneForCreateInput | null;
  charge?: string | null;
  shippingAddress?: CustomerAddressRelateToOneForCreateInput | null;
  createdAt?: string | null;
}

export interface OrderItemCreateInput {
  name?: string | null;
  variants?: string | null;
  description?: string | null;
  image?: ProductImageRelateToOneForCreateInput | null;
  price?: number | null;
  quantity?: number | null;
  order?: OrderRelateToOneForCreateInput | null;
}

export interface OrderItemRelateToManyForCreateInput {
  create?: OrderItemCreateInput[] | null;
  connect?: OrderItemWhereUniqueInput[] | null;
}

export interface OrderItemWhereUniqueInput {
  id?: string | null;
}

export interface OrderRelateToManyForCreateInput {
  create?: OrderCreateInput[] | null;
  connect?: OrderWhereUniqueInput[] | null;
}

export interface OrderRelateToOneForCreateInput {
  create?: OrderCreateInput | null;
  connect?: OrderWhereUniqueInput | null;
}

export interface OrderWhereUniqueInput {
  id?: string | null;
}

export interface ProductCreateInput {
  name?: string | null;
  description?: string | null;
  images?: ProductImageRelateToManyForCreateInput | null;
  status?: string | null;
  price?: number | null;
  category?: CategoryRelateToManyForCreateInput | null;
  inventoryItem?: InventoryItemRelateToOneForCreateInput | null;
  variants?: VariantRelateToManyForCreateInput | null;
  createdAt?: string | null;
  user?: UserRelateToOneForCreateInput | null;
}

export interface ProductImageCreateInput {
  image?: DbUpload | null;
  altText?: string | null;
  createdAt?: string | null;
  product?: ProductRelateToManyForCreateInput | null;
}

export interface ProductImageRelateToManyForCreateInput {
  create?: ProductImageCreateInput[] | null;
  connect?: ProductImageWhereUniqueInput[] | null;
}

export interface ProductImageRelateToOneForCreateInput {
  create?: ProductImageCreateInput | null;
  connect?: ProductImageWhereUniqueInput | null;
}

export interface ProductImageWhereUniqueInput {
  id?: string | null;
}

export interface ProductRelateToManyForCreateInput {
  create?: ProductCreateInput[] | null;
  connect?: ProductWhereUniqueInput[] | null;
}

export interface ProductRelateToOneForCreateInput {
  create?: ProductCreateInput | null;
  connect?: ProductWhereUniqueInput | null;
}

export interface ProductWhereUniqueInput {
  id?: string | null;
}

export interface RoleCreateInput {
  name?: string | null;
  canManageProducts?: boolean | null;
  canSeeOtherUsers?: boolean | null;
  canManageUsers?: boolean | null;
  canManageRoles?: boolean | null;
  canManageCart?: boolean | null;
  canManageOrders?: boolean | null;
  assignedTo?: UserRelateToManyForCreateInput | null;
}

export interface RoleRelateToOneForCreateInput {
  create?: RoleCreateInput | null;
  connect?: RoleWhereUniqueInput | null;
}

export interface RoleWhereUniqueInput {
  id?: string | null;
}

export interface UserCreateInput {
  name?: string | null;
  email?: string | null;
  password?: string | null;
  addresses?: CustomerAddressRelateToManyForCreateInput | null;
  defaultShipping?: CustomerAddressRelateToOneForCreateInput | null;
  defaultBilling?: CustomerAddressRelateToOneForCreateInput | null;
  cart?: CartItemRelateToManyForCreateInput | null;
  orders?: OrderRelateToManyForCreateInput | null;
  role?: RoleRelateToOneForCreateInput | null;
  products?: ProductRelateToManyForCreateInput | null;
  createdAt?: string | null;
  passwordResetToken?: string | null;
  passwordResetIssuedAt?: string | null;
  passwordResetRedeemedAt?: string | null;
}

export interface UserRelateToManyForCreateInput {
  create?: UserCreateInput[] | null;
  connect?: UserWhereUniqueInput[] | null;
}

export interface UserRelateToOneForCreateInput {
  create?: UserCreateInput | null;
  connect?: UserWhereUniqueInput | null;
}

export interface UserRelateToOneForUpdateInput {
  create?: UserCreateInput | null;
  connect?: UserWhereUniqueInput | null;
  disconnect?: boolean | null;
}

export interface UserWhereUniqueInput {
  id?: string | null;
  email?: string | null;
}

export interface VariantCreateInput {
  option?: OptionRelateToOneForCreateInput | null;
  product?: ProductRelateToOneForCreateInput | null;
  name?: string | null;
  description?: string | null;
}

export interface VariantRelateToManyForCreateInput {
  create?: VariantCreateInput[] | null;
  connect?: VariantWhereUniqueInput[] | null;
}

export interface VariantWhereUniqueInput {
  id?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
