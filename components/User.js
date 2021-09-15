import { gql, useQuery } from '@apollo/client';

const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
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
            image {
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
            variantType {
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

export function useUser() {
  const { data } = useQuery(CURRENT_USER_QUERY);
  return data?.authenticatedItem;
}

export { CURRENT_USER_QUERY };
