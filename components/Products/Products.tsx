import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { perPage } from '../../config';
import Product from './Product';
import { ALL_PRODUCTS_QUERY } from '../../queries/getAllProducts';
import DisplayApolloError from '../DisplayApolloError';
import {
  ALL_PRODUCTS_QUERY as ALL_PRODUCTS_QUERY_TYPE,
  ALL_PRODUCTS_QUERYVariables as ALL_PRODUCTS_QUERY_VARIABLES,
} from '../../types/generated/ALL_PRODUCTS_QUERY';

const ProductsListStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  align-content: center;
  justify-content: space-evenly;
  align-items: stretch;
  justify-items: center;
  grid-gap: 5px;
  padding: 5px 0;
`;

export default function Products({ page }: { page: number }): JSX.Element {
  // Hook that will return query info
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayApolloError error={error} />;
  if (!data) return <p>No products found</p>;
  const { products } = data || null;
  return (
    <div className="products-wrapper">
      <ProductsListStyles>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsListStyles>
      <style jsx>{`
        .products-wrapper {
          width: 100%;
          height: auto;
        }

        .nav-list {
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-content: center
          justify-items: center;
          width: 100%;
          height: 4em;

        }
        .nav-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-transform: uppercase;
          padding: 1rem;
          margin: 0;
          font-weight: 900;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
