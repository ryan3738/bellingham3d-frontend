/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ALL_PRODUCTS_QUERY
// ====================================================

export interface ALL_PRODUCTS_QUERY_products_images_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface ALL_PRODUCTS_QUERY_products_images {
  __typename: "ProductImage";
  id: string;
  image: ALL_PRODUCTS_QUERY_products_images_image | null;
}

export interface ALL_PRODUCTS_QUERY_products {
  __typename: "Product";
  id: string;
  name: string | null;
  price: number | null;
  description: string | null;
  status: string | null;
  images: ALL_PRODUCTS_QUERY_products_images[] | null;
}

export interface ALL_PRODUCTS_QUERY {
  products: ALL_PRODUCTS_QUERY_products[] | null;
}

export interface ALL_PRODUCTS_QUERYVariables {
  skip?: number | null;
  first?: number | null;
}
