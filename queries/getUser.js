const { default: gql } = require('graphql-tag');

const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
        defaultShipping {
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
        cart {
          id
          quantity
          product {
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
          variants {
            name
            option {
              name
            }
          }
        }
        role {
          canManageProducts
        }
      }
    }
  }
`;

export { CURRENT_USER_QUERY };
