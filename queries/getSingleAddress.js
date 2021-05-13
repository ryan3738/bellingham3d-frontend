const { default: gql } = require('graphql-tag');

const SINGLE_ADDRESS_QUERY = gql`
  query SINGLE_ADDRESS_QUERY($id: ID!) {
    CustomerAddress(where: { id: $id }) {
      id
      firstName
      lastName
      company
      address1
      address2
      city
      region
      country
      zip
      phone
      isDefaultShipping {
        id
      }
    }
  }
`;

export { SINGLE_ADDRESS_QUERY };
