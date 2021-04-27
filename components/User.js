import { gql, useQuery } from '@apollo/client';

const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
        defaultAddress {
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
        }
        cart {
          id
          quantity
          product {
            id
            price
            name
            description
            image {
              image {
                publicUrlTransformed
              }
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
