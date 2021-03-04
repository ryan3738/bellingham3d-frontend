import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';
import AddToCart from './AddToCart';
import DisplayError from './ErrorMessage';
import PriceTag from './styles/PriceTag';

const ProductStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  max-width: var(--maxWidth);
  align-items: top;
  gap: 2rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      id
      image {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const { Product: product } = data;
  console.log(data);
  return (
    <ProductStyles>
      <Head>
        <title>Bellingham 3D | {product.name} </title>
      </Head>

      {product.image.map((productImage) => (
        <img
          key=""
          src={productImage.image.publicUrlTransformed}
          alt={productImage.altText}
        />
      ))}
      <div className="details">
        <div>
          <h2>
            {product.name} - {formatMoney(product.price)}
          </h2>
          <div />
        </div>
        <p>{product.description}</p>
        <AddToCart id={product.id} />
      </div>
    </ProductStyles>
  );
}
