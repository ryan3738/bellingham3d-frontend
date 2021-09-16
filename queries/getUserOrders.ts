import { gql } from 'graphql-tag';

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    orders {
      id
      charge
      total
      items {
        id
        name
        description
        price
        quantity
        image {
          id
          image {
            id
            publicUrlTransformed(transformation: { width: "360" })
          }
          altText
        }
      }
    }
  }
`;

export { USER_ORDERS_QUERY };
