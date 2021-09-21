import { useQuery } from '@apollo/client';
import Head from 'next/head';
import { useState } from 'react';
import styled from 'styled-components';
import formatMoney from '../../lib/formatMoney';
import AddToCart from '../Cart/AddToCart';
import DisplayApolloError from '../DisplayApolloError';
import ImageSlider from '../ImageSlider';
import ProductVariants from './ProductVariants';
import { useUser } from '../User';
import { SINGLE_PRODUCT_QUERY } from '../../queries/getSingleProduct';
import SeeAllProducts from './SeeAllProducts';
import { siteData } from '../../public/site-data';
import { Product, Variant } from '../../types';

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

export default function ProductDetails({
  id,
}: {
  id: Product['id'];
}): JSX.Element {
  const [variantsState, setVariantsState] = useState([]);
  const me = useUser();

  console.log('VARIANTS STATE', variantsState);

  const { data, loading, error } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayApolloError error={error} />;
  if (!data) return <SeeAllProducts />;
  const { product } = data || null;

  // Add a variant to the variantsState array for current product
  const setVariants = (name: string, value: string): void => {
    // console.log('NAME & VALUE', name, value);
    setVariantsState((prevVariants) => prevVariants.concat({ name, value }));
  };
  // console.log('VariantsState Initial', variantsState);

  // Select variant from array and update state
  const updateVariant = (name: string, value: string): void => {
    console.log('NAME & VALUE', name, value);
    const newState = [...variantsState];
    const variantIndex = variantsState.findIndex((item) => item.name === name);
    newState[variantIndex] = {
      ...variantsState[variantIndex],
      value,
    };
    setVariantsState(newState);
  };

  function getVariantIds(variantsList: Variant[]): Variant['id'][] {
    const variantIds = variantsList.map((variant) => variant.value);
    // console.log('variantIds', variantIds);
    return variantIds;
  }

  return (
    <>
      <ProductStyles>
        <Head>
          <title>
            {product.name} | {siteData.businessName}
          </title>
        </Head>
        <ImageSlider slides={product.images} alt={product.name} />
        <div className="details">
          <h2>{product.name}</h2>
          <h3>{formatMoney(product.price)}</h3>
          <ProductVariants
            variants={product.variants}
            addVariant={setVariants}
            updateVariant={updateVariant}
          />
          {me && (
            <AddToCart
              id={product.id}
              variantIds={getVariantIds(variantsState)}
            />
          )}

          <p>{product.description}</p>
          {!me && (
            <div>
              <h3>You must be signed in to add items to your cart</h3>
              <p>Please create an account or login</p>
            </div>
          )}
          <SeeAllProducts />
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
