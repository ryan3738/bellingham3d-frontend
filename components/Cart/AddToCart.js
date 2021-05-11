import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { array, string } from 'prop-types';
import { CURRENT_USER_QUERY } from '../User';

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!, $variantIds: [ID]) {
    addToCart(productId: $id, productVariantIds: $variantIds) {
      id
    }
  }
`;

export default function AddToCart({ id, variantIds }) {
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id, variantIds },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  const handleClick = () => {
    console.log('Addding item #', id, 'and variants to cart...', variantIds);
  };

  return (
    <button
      disabled={loading}
      type="button"
      onClick={() => {
        addToCart();
        handleClick();
      }}
    >
      Add{loading && 'ing'} To Cart
    </button>
  );
}

AddToCart.propTypes = {
  id: string.isRequired,
  // variantIds: array.isRequired,
};