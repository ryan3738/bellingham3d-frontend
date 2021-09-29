import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import useForm from '../../lib/useForm';
import Form from '../styles/Form';
import DisplayApolloError from '../DisplayApolloError';
import { ButtonStyles } from '../styles/StateStyles';
import { CURRENT_USER_QUERY } from '../../queries/getUser';
import Message from '../Message';

const MAGIC_AUTH_MUTATION = gql`
  mutation MAGIC_AUTH_MUTATION($email: String!, $token: String!) {
    redeemUserMagicAuthToken(email: $email, token: $token) {
      ... on RedeemUserMagicAuthTokenSuccess {
        item {
          id
          email
          name
        }
      }
      ... on RedeemUserMagicAuthTokenFailure {
        code
        message
      }
    }
  }
`;

type AppProps = {
  token: string;
  email: string;
};

export default function MagicAuth({ token, email }: AppProps): JSX.Element {
  const router = useRouter();
  const { inputs, handleChange, resetForm } = useForm({
    email: email || '',
    token,
  });
  const [signin, { data, loading }] = useMutation(MAGIC_AUTH_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  async function handleSubmit(e): Promise<void> {
    e.preventDefault();
    // Send the email and token to the graphqlAPI
    const res = await signin();
    // If the response is successful, redirect to the home page
    if (res.data.redeemUserMagicAuthToken.item) {
      resetForm();
      router.push({
        pathname: `/products`,
      });
    }
    resetForm();
  }

  const error =
    data?.redeemUserMagicAuthToken.__typename ===
    'RedeemUserMagicAuthTokenFailure'
      ? data?.redeemUserMagicAuthToken
      : undefined;

  return (
    //   method="post" makes sure the password doesn't go to the url
    <Form method="post" onSubmit={handleSubmit}>
      <h2>Enter Email to Sign In</h2>
      <fieldset>
        <DisplayApolloError error={error} />
        <Message loading={loading}>
          {data?.redeemUserMagicAuthToken === null && 'You are signed in!'}
        </Message>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>

        <ButtonStyles type="submit" disabled={loading}>
          Sign In
        </ButtonStyles>
      </fieldset>
    </Form>
  );
}
