/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SINGLE_PRODUCT_QUERY
// ====================================================

export interface SINGLE_PRODUCT_QUERY_product_variants_option {
  __typename: "Option";
  id: string;
  name: string | null;
}

export interface SINGLE_PRODUCT_QUERY_product_variants {
  __typename: "Variant";
  id: string;
  name: string | null;
  option: SINGLE_PRODUCT_QUERY_product_variants_option | null;
}

export interface SINGLE_PRODUCT_QUERY_product_images_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface SINGLE_PRODUCT_QUERY_product_images {
  __typename: "ProductImage";
  altText: string | null;
  image: SINGLE_PRODUCT_QUERY_product_images_image | null;
}

export interface SINGLE_PRODUCT_QUERY_product {
  __typename: "Product";
  id: string;
  name: string | null;
  price: number | null;
  description: string | null;
  variants: SINGLE_PRODUCT_QUERY_product_variants[] | null;
  images: SINGLE_PRODUCT_QUERY_product_images[] | null;
}

export interface SINGLE_PRODUCT_QUERY {
  product: SINGLE_PRODUCT_QUERY_product | null;
}

export interface SINGLE_PRODUCT_QUERYVariables {
  id: string;
}
