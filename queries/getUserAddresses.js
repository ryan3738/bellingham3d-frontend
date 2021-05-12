const { default: gql } = require('graphql-tag');

const USER_ADDRESSES_QUERY = gql`
  query USER_ADDRESSES_QUERY {
    allCustomerAddresses {
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

export { USER_ADDRESSES_QUERY };
