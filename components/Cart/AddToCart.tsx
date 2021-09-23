import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { ButtonStyles } from '../styles/StateStyles';
import { CURRENT_USER_QUERY } from '../../queries/getUser';
import { Product, Variant } from '../../types/types';

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!, $variantIds: [ID]) {
    addToCart(productId: $id, variantIds: $variantIds) {
      id
    }
  }
`;

type AppProps = {
  id: Product['id'];
  variantIds: Variant['id'][];
};

export default function AddToCart({ id, variantIds }: AppProps): JSX.Element {
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id, variantIds },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <ButtonStyles
      disabled={loading}
      type="button"
      onClick={() => {
        addToCart();
      }}
    >
      Add{loading && 'ing'} To Cart
    </ButtonStyles>
  );
}
