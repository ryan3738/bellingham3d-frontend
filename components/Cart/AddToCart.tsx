import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { ButtonStyles } from '../styles/StateStyles';
import { CURRENT_USER_QUERY } from '../../queries/getUser';
import { ProductType, Variant } from '../../types/types';
import {
  ADD_TO_CART_MUTATION,
  ADD_TO_CART_MUTATIONVariables as ADD_TO_CART_MUTATION_VARIABLES,
} from '../../types/generated/ADD_TO_CART_MUTATION';

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!, $variantIds: [ID]) {
    addToCart(productId: $id, variantIds: $variantIds) {
      id
    }
  }
`;

type AppProps = {
  id: ProductType['id'];
  variantIds: Variant['id'][];
};

export default function AddToCart({ id, variantIds }: AppProps): JSX.Element {
  const [addToCart, { loading }] = useMutation<
    ADD_TO_CART_MUTATION,
    ADD_TO_CART_MUTATION_VARIABLES
  >(ADD_TO_CART_MUTATION, {
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
