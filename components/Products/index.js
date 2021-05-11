import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { perPage } from '../../config';
import Product from './Product';

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
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

  // console.log('data:', data);
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
  // console.log('getCategoryList:', getCategoryList(data.allProducts));
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="products-wrapper">
      {/* TODO: Add Category navigation */}
      {/* <div className="nav-list">
        {getCategoryList(data.allProducts).map((category) => (
          <div className="nav-link" key={category}>
            {category}
          </div>
        ))}
      </div> */}
      <ProductsListStyles>
        {data.allProducts
          // .filter((e) => e.status === 'AVAILABLE')
          .map((product) => (
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