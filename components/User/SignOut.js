import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Button from '../Button';
import { CURRENT_USER_QUERY } from '.';

const SIGN_OUT_MUTATION = gql`
  mutation {
    endSession
  }
`;

export default function SignOut({ children }) {
  const [signout] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  return (
    <Button button onClick={signout}>
      {children}
    </Button>
  );
}
