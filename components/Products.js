import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { perPage } from '../config';
import Product from './Product';

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
    allProducts(first: $first, skip: $skip) {
      id
      name
      price
      description
      image {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ProductsListStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  /* grid-template-rows: repeat(auto-fill, 200px); */
  align-content: center;
  justify-content: space-evenly;
  align-items: stretch;
  justify-items: center;
  grid-gap: 5px;
  padding: 5px 0;
  /* grid-auto-flow: dense; */
`;

export default function Products({ page }) {
  // Hook that will return query info
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="products-wrapper">
      <ProductsListStyles>
        {data.allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsListStyles>
      <style jsx>{`
        .products-wrapper {
          width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
}
