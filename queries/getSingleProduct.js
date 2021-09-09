import gql from 'graphql-tag';

export const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    product(where: { id: $id }) {
      id
      name
      price
      description
      variants {
        id
        name
        Option {
          id
          name
        }
      }
      images {
        altText
        image {
          publicUrlTransformed(transformation: { width: "600" })
        }
      }
    }
  }
`;
