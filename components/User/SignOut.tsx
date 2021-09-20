import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Button from '../Button';
import { CURRENT_USER_QUERY } from '../../queries/getUser';

const SIGN_OUT_MUTATION = gql`
  mutation {
    endSession
  }
`;

type AppProps = {
  children: React.ReactNode;
};

export default function SignOut({ children }: AppProps): JSX.Element {
  const [signout] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  return (
    <Button button onClick={signout}>
      {children}
    </Button>
  );
}
