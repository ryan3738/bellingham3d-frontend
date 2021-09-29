import { gql } from 'graphql-tag';

const USER_CART_QUERY = gql`
  query USER_CART_QUERY($id: ID!) {
    cartItems(where: { user: { id: { equals: $id } } }) {
      id
      quantity
      product {
        id
      }
      variants {
        id
        option {
          id
        }
      }
    }
  }
`;
const GET_CART_PRODUCT = gql`
  query GET_CART_PRODUCT {
    product(where: { id: "cktomklto2025sglahjg130mw" }) {
      id
      name
      price
      description
      images {
        image {
          publicUrlTransformed(transformation: { width: "120" })
        }
      }
      inventoryItem {
        id
        requiresShipping
      }
    }
  }
`;

const GET_CART_VARIANT = gql`
  query GET_CART_VARIANT {
    variant(where: { id: "cktomktxt2233sglau6k0bpjo" }) {
      id
      name
      option {
        id
        name
      }
    }
  }
`;

export { USER_CART_QUERY, GET_CART_PRODUCT, GET_CART_VARIANT };
