import styled from 'styled-components';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import formatMoney from '../../lib/formatMoney';
import RemoveFromCart from './RemoveFromCart';

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
  display: grid;
  grid-template-columns: auto 1fr auto;
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
      {product.image[0]?.image?.publicUrlTransformed ? (
        <img
          width="100"
          src={product.image[0]?.image?.publicUrlTransformed}
          alt={product.name}
        />
      ) : (
        <img width="100" src="/public/android-chrome-512x512.png" alt="" />
      )}
      <div>
        <h3>{product.name}</h3>
        {variants.map((variant) => (
          <div key={variant.variantType.name}>
            {variant.variantType.name} - {variant.name}
          </div>
        ))}
        <div>
          {formatMoney(product.price)}
          <button
            className="quantity-button"
            disabled={loading || quantity <= 1}
            type="button"
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
            -
          </button>
          {quantity}
          <button
            className="quantity-button"
            disabled={loading}
            type="button"
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
            +
          </button>
          {formatMoney(product.price * quantity)}
        </div>
      </div>
      <RemoveFromCart id={id} />
      <style jsx>{`
        .quantity-button {
          margin: 0 10px 0 10px;
          padding: 0.25rem;
        }
      `}</style>
    </CartItemStyles>
  );
}
