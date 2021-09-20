import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { ButtonStyles } from '../styles/StateStyles';
import { CURRENT_USER_QUERY } from '../../queries/getUser';

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!, $variantIds: [ID]) {
    addToCart(productId: $id, variantIds: $variantIds) {
      id
    }
  }
`;

type AppProps = {
  id: string;
  variantIds: string[];
};

export default function AddToCart({ id, variantIds }: AppProps): JSX.Element {
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id, variantIds },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  // const handleClick = () => {
  //   // console.log('Addding item #', id, 'and variants to cart...', variantIds);
  // };

  return (
    <ButtonStyles
      disabled={loading}
      type="button"
      onClick={() => {
        addToCart();
        // handleClick();
      }}
    >
      Add{loading && 'ing'} To Cart
    </ButtonStyles>
  );
}
