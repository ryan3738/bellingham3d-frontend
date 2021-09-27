/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SEARCH_PRODUCTS_QUERY
// ====================================================

export interface SEARCH_PRODUCTS_QUERY_searchTerms_images_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface SEARCH_PRODUCTS_QUERY_searchTerms_images {
  __typename: "ProductImage";
  image: SEARCH_PRODUCTS_QUERY_searchTerms_images_image | null;
}

export interface SEARCH_PRODUCTS_QUERY_searchTerms {
  __typename: "Product";
  id: string;
  name: string | null;
  images: SEARCH_PRODUCTS_QUERY_searchTerms_images[] | null;
}

export interface SEARCH_PRODUCTS_QUERY {
  searchTerms: SEARCH_PRODUCTS_QUERY_searchTerms[] | null;
}

export interface SEARCH_PRODUCTS_QUERYVariables {
  searchTerm: string;
}
