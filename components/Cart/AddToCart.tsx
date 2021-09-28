import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { ButtonStyles } from '../styles/StateStyles';
import { CURRENT_USER_QUERY } from '../../queries/getUser';
import { ProductType, Variant } from '../../types/types';
import { useUser } from '../User/User';
import {
  ADD_TO_CART_MUTATION as ADD_TO_CART_MUTATION_TYPE,
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
  const user = useUser();
  const [addToCart, { loading }] = useMutation<
    ADD_TO_CART_MUTATION_TYPE,
    ADD_TO_CART_MUTATION_VARIABLES
  >(ADD_TO_CART_MUTATION, {
    variables: { id, variantIds },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  // Create add to cart function that checks if user is logged in
  const addToCartFunction = (): void => {
    // If user is present add item to cart using the addToCart mutation
    if (user) {
      addToCart();
    }
    // If !user present check for device-id
    if (!user) {
      alert('Please login to add to cart');
    }
  };
  // If !device-id present create a device id
  // If device-id is present add item to cart using the addToCart mutation

  return (
    <ButtonStyles
      disabled={loading}
      type="button"
      onClick={() => {
        addToCartFunction();
      }}
    >
      Add{loading && 'ing'} To Cart
    </ButtonStyles>
  );
}
