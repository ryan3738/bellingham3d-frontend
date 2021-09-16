import { gql } from 'graphql-tag';

const CREATE_ADDRESS_MUTATION = gql`
  mutation CREATE_ADDRESS_MUTATION(
    #   Which variables are getting passed in and what types are they
    $firstName: String!
    $lastName: String
    $company: String
    $address1: String!
    $address2: String
    $city: String!
    $region: String!
    $country: String!
    $zip: String!
    $phone: String
    $isDefaultShipping: UserRelateToOneForCreateInput
  ) {
    createCustomerAddress(
      data: {
        firstName: $firstName
        lastName: $lastName
        company: $company
        address1: $address1
        address2: $address2
        city: $city
        region: $region
        country: $country
        zip: $zip
        phone: $phone
        isDefaultShipping: $isDefaultShipping
      }
    ) {
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

export { CREATE_ADDRESS_MUTATION };
