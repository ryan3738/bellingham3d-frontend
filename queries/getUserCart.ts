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

export { USER_CART_QUERY };
