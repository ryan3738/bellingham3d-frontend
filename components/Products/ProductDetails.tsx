import { useQuery } from '@apollo/client';
import Head from 'next/head';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import formatMoney from '../../lib/formatMoney';
import AddToCart from '../Cart/AddToCart';
import DisplayApolloError from '../DisplayApolloError';
import ImageSlider from '../ImageSlider';
import ProductVariants from './ProductVariants';
import { useUser } from '../User/User';
import { SINGLE_PRODUCT_QUERY } from '../../queries/getSingleProduct';
import SeeAllProducts from './SeeAllProducts';
import { siteData } from '../../public/site-data';
import {
  Option,
  ProductType,
  SelectVariantType,
  Variant,
} from '../../types/types';
import AuthTabs from '../User/AuthTabs';

const ProductStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  align-content: center;
  justify-content: space-evenly;
  justify-items: center;
  align-items: start;
  width: 100%;
  height: auto;
  gap: 2rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

type AppProps = {
  id: ProductType['id'];
};

interface SelectedVariant extends Option {
  variant: Variant;
}

export default function ProductDetails({ id }: AppProps): JSX.Element {
  const [variantsState, setVariantsState] = useState<SelectedVariant[]>([]);
  const user = useUser();
  console.log('ID', id);

  const selectVariant: SelectVariantType = useCallback(
    ({ option, variant }) => {
      // Take in options and variants
      setVariantsState((previousState) => {
        // If the option doesn't exist add it to state
        if (!previousState.find((item) => item.id === option.id)) {
          const newOption = {
            id: option.id,
            name: option.name,
            variant: {
              id: variant.id,
              name: variant.name,
            },
          };
          return [...previousState, newOption];
        }
        previousState.forEach((item) => {
          // If option exists, update the variant state
          if (item.name === option.name) {
            item.variant.id = variant.id;
            item.variant.name = variant.name;
          }
        });
        return [...previousState];
      });
    },
    []
  );

  const { data, loading, error } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayApolloError error={error} />;
  if (!data) return <SeeAllProducts />;

  const { product } = data || null;
  const getVariantIds = (options: SelectedVariant[]): Variant['id'][] => {
    const variantIds = options.map((option) => option.variant.id);
    // console.log('variantIds', variantIds);
    return variantIds;
  };

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
            selectVariant={selectVariant}
          />

          <AddToCart
            id={product.id}
            variantIds={getVariantIds(variantsState)}
            disabled={!user}
          />

          <p>{product.description}</p>
          {!user && (
            <>
              <div>
                <h3>You must be signed in to add items to your cart</h3>
              </div>
              <AuthTabs />
            </>
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
