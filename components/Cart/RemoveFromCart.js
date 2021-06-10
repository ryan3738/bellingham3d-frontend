import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { FaWindowClose } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';
import { ButtonIconStyles } from '../styles/StateStyles';

const BigButton = styled.button`
  max-width: 50px;
  font-size: 3rem;
  background: none;
  border: 0;
  color: var(--red);
  &:hover {
    color: var(--red);
    cursor: pointer;
  }
`;

const REMOVE_FROM_CART_MUTATION = gql`
  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;

function update(cache, payload) {
  cache.evict('cache.identify(payload.data.deleteCartItem)');
}

export default function RemoveFromCart({ id }) {
  const [removeFromCart, { loading }] = useMutation(REMOVE_FROM_CART_MUTATION, {
    variables: { id },
    update,
    // This does not work properly right now. Currently using cache.evict until a fix is found.
    // optimisticResponse: {
    //   deleteCartItem: {
    //     __typename: 'CartItem',
    //     id,
    //   },
    // },
  });
  return (
    <ButtonIconStyles
      onClick={removeFromCart}
      disabled={loading}
      type="button"
      title="Remove from cart"
    >
      <IconContext.Provider value={{ size: '42px' }}>
        <FaWindowClose />
      </IconContext.Provider>
    </ButtonIconStyles>
  );
}
