import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Button from './Button';
import { CURRENT_USER_QUERY } from './User';

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(productId: $id) {
      id
    }
  }
`;

export default function AddToCart({ id }) {
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <button
      disabled={loading}
      type="button"
      onClick={() => {
        addToCart();
      }}
    >

      <Button>
        Add
      </Button>
      Add{loading && 'ing'} To Cart
      <style jsx>{`
        button {
          color: var(--white);
          margin: 1rem 0;
        }
        button:hover {
          color: var(--black);
        }
      `}</style>
    </button>
  );
}
