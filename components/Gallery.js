import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { perPage } from '../config';
import GalleryItem from './GalleryItem';

export const ALL_PRODUCTS_GALLERY_QUERY = gql`
  query ALL_PRODUCTS_GALLERY_QUERY($skip: Int = 0, $first: Int) {
    allProducts(where: { status: "AVAILABLE" }, first: $first, skip: $skip) {
      id
      name
      price
      description
      status
      category {
        name
      }
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
  justify-content: center;
  align-items: center;
  justify-items: center;
  grid-gap: 5px;
  padding: 5px 0;
  /* grid-auto-flow: dense; */
`;

export default function Gallery({ page }) {
  // Hook that will return query info
  const { data, error, loading } = useQuery(ALL_PRODUCTS_GALLERY_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  function getCategoryList(productList = {}) {
    const List = [];
    try {
      productList.map((products) =>
        products.category.map((categories) => List.push(categories.name))
      );
      return [...new Set(List)];
    } catch {
      return console.error('getCategoryList function error');
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="products-wrapper">
      <ProductsListStyles>
        {data.allProducts
          // .filter((e) => e.status === 'AVAILABLE')
          .map((product) => (
            <GalleryItem key={product.id} product={product} />
          ))}
      </ProductsListStyles>
      <style jsx>{`
        .products-wrapper {
          width: 100vw;
          height: auto;
        }
      `}</style>
    </div>
  );
}
