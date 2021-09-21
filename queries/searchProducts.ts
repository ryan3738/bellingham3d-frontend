import gql from 'graphql-tag';

const SEARCH_PRODUCTS_QUERY = gql`
  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {
    # Rename property name of query. Good if you want to have mutliple queries of the same property.
    searchTerms: products(
      where: {
        OR: [
          { name: { contains: $searchTerm } }
          { description: { contains: $searchTerm } }
        ]
      }
    ) {
      id
      name
      images {
        image {
          publicUrlTransformed(transformation: { width: "120" })
        }
      }
    }
  }
`;

export { SEARCH_PRODUCTS_QUERY };
