import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import { string } from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';
import AddToCart from './AddToCart';
import Button from './Button';
import DisplayError from './ErrorMessage';
import ImageSlider from './ImageSlider';
import ProductVariants from './ProductVariants';

const ProductStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  align-content: center;
  justify-content: space-evenly;
  align-items: stretch;
  justify-items: center;
  align-items: top;
  width: 100%;
  height: auto;
  gap: 2rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      price
      description
      variants {
        id
        name
        variantType {
          id
          name
        }
      }
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
  const [variantsState, setVariantsState] = useState([]);

  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  });

  // const addVariant = useCallback((name, value) => {
  //   setVariantsState({ ...variantsState, [name]: value });
  //   // variantsState.push(newVariant);
  //   console.log('VariantsState', variantsState);
  // }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const { Product: product } = data;

  // Add a variant to the variantsState array for current product
  const addVariant = (name, value) => {
    setVariantsState((prevVariants) => prevVariants.concat({ name, value }));
  };
  // console.log('VariantsState Initial', variantsState);
  // Need to select correct variant and update to new state
  const updateVariant = (name, value) => {
    const newState = [...variantsState];
    const variantIndex = variantsState.findIndex((e) => e.name === name);
    newState[variantIndex] = {
      ...variantsState[variantIndex],
      value,
    };
    // console.log('newState', newState);
    // variantsState.filter((variantState) => variantState);
    setVariantsState(newState);
    // setVariantsState((variantArray) => [...variantArray, newState]);
  };

  // function updateVariant(value, name) {
  // setVariantsState((variantArray) => [...variantArray, newVariant]);
  // }

  return (
    <>
      {/* {loading && <p>Loading...</p>} */}
      {/* {error && <DisplayError error={error} />} */}
      <ProductStyles>
        <Head>
          <title>Bellingham 3D | {product.name} </title>
        </Head>
        <ImageSlider slides={product.image} />
        <div className="details">
          <h2>{product.name}</h2>
          <h3>{formatMoney(product.price)}</h3>
          <ProductVariants
            variants={product.variants}
            addVariant={addVariant}
            updateVariant={updateVariant}
          />
          <AddToCart id={product.id} variants={variantsState} />
          <p>{product.description}</p>
          <Button buttonLink="/products">Return to All Products</Button>
        </div>

        <style jsx>{`
          select {
            width: 100%;
            padding: 0.5rem;
            font-size: 1rem;
            border: 1px solid black;
            margin: 5px 0 20px 0;
          }
          select:focus {
            outline: 0;
            border-color: var(--navyBlue);
          }
        `}</style>
      </ProductStyles>
    </>
  );
}

SingleProduct.propTypes = {
  id: string.isRequired,
};
