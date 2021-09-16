import gql from 'graphql-tag';

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
    products(
      where: { status: { equals: "AVAILABLE" } }
      orderBy: { createdAt: desc }
      take: $first
      skip: $skip
    ) {
      id
      name
      price
      description
      status
      images {
        id
        image {
          publicUrlTransformed(transformation: { width: "360" })
        }
      }
    }
  }
`;

export { ALL_PRODUCTS_QUERY };
