import styled from 'styled-components';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Link from 'next/link';
import { IconContext } from 'react-icons/lib';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';
import formatMoney from '../../lib/formatMoney';
import RemoveFromCart from './RemoveFromCart';
import { ButtonIconStyles } from '../styles/StateStyles';

const UPDATE_CART_ITEM_MUTATION = gql`
  mutation UPDATE_CART_ITEM_MUTATION($id: ID!, $quantity: Int) {
    updateCartItem(id: $id, data: { quantity: $quantity }) {
      id
      quantity
    }
  }
`;

const CartItemStyles = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGrey);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: auto;
  padding: 0.25rem;
  /* justify-content: space-evenly; */
  /* justify-items: center; */
  img {
    margin-right: 1rem;
  }
  h3,
  p {
    margin: 0;
  }
`;

export default function CartItem({
  cartItem: { product, quantity, id, variants },
}) {
  // const { product } = cartItem;
  // const { quantity, id } = cartItem;
  // console.log('Cart Variants', variants);
  const [updateCartItem, { loading }] = useMutation(UPDATE_CART_ITEM_MUTATION);
  // console.log(cartItem);
  if (!product) return null;
  return (
    <CartItemStyles>
      <div className="item-container">
        <Link href={`/product/${product.id}`}>
          <a>
            {product.image[0]?.image?.publicUrlTransformed ? (
              <img
                width="100"
                src={product.image[0]?.image?.publicUrlTransformed}
                alt={product.name}
              />
            ) : (
              <img
                width="100"
                src="/public/android-chrome-512x512.png"
                alt=""
              />
            )}
          </a>
        </Link>
        <div className="item-details-container">
          <h3>{product.name}</h3>
          {variants.map((variant) => (
            <div key={variant.variantType.name}>
              {variant.variantType.name} - {variant.name}
            </div>
          ))}
          <div className="price-quanity-container">
            <div className="price-quantity-wrapper">
              {formatMoney(product.price)}
            </div>
            <div className="quanity-container">
              <IconContext.Provider value={{ size: '42px' }}>
                <ButtonIconStyles
                  disabled={loading || quantity <= 1}
                  type="button"
                  tabIndex="0"
                  title="decrement item quantity"
                  onClick={() => {
                    updateCartItem({
                      variables: {
                        id,
                        quantity: quantity - 1,
                      },
                      optimisticResponse: {
                        __typename: 'Mutation',
                        updateComment: {
                          id,
                          __typename: 'Quantity',
                          content: quantity - 1,
                        },
                      },
                    });
                  }}
                >
                  <FaMinusSquare />
                </ButtonIconStyles>
              </IconContext.Provider>
              <div className="price-quantity-wrapper">{quantity}</div>
              <IconContext.Provider value={{ size: '42px' }}>
                <ButtonIconStyles
                  // className="quantity-button"
                  disabled={loading}
                  type="button"
                  tabIndex="0"
                  title="increment item quantity"
                  onClick={() => {
                    updateCartItem({
                      variables: {
                        id,
                        quantity: quantity + 1,
                      },
                      optimisticResponse: {
                        __typename: 'Mutation',
                        updateComment: {
                          id,
                          __typename: 'Quantity',
                          content: quantity + 1,
                        },
                      },
                    });
                  }}
                >
                  <FaPlusSquare />
                </ButtonIconStyles>
              </IconContext.Provider>
            </div>
            <div className="price-quantity-wrapper">
              {formatMoney(product.price * quantity)}
            </div>
          </div>
        </div>
      </div>
      <RemoveFromCart id={id} />
      <style jsx>{`
        .item-container {
          display: flex;
          flex-flow: row wrap;
          justify-content: flex-start;
          align-items: flex-start;
        }
        .price-quantity-wrapper {
          padding: 0.5rem;
        }
        .price-quanity-container {
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          height: auto;
          padding: 0.25rem;
        }

        .quanity-container {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-around;
          align-items: center;
          width: auto;
          height: 100%;
          border: 1px solid var(--lightGrey);
        }
        .quantity-button:hover {
          opacity: var(--hover);
        }
        .quantity-button:disabled,
        [disabled] {
          opacity: var(--disabled);
        }
      `}</style>
    </CartItemStyles>
  );
}
