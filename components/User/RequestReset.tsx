import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../../lib/useForm';
import Form from '../styles/Form';
import DisplayApolloError from '../DisplayApolloError';
import { ButtonStyles } from '../styles/StateStyles';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;

export default function RequestReset(): JSX.Element {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
  });
  const [signup, { data, loading, error }] = useMutation(
    REQUEST_RESET_MUTATION,
    {
      variables: inputs,
      // refetch the currently logged in user
      // refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );

  async function handleSubmit(e): Promise<void> {
    e.preventDefault();
    // console.log(inputs);
    await signup().catch(console.error);
    // console.log(data, loading, error);
    resetForm();
    // Send the email and password to the graphqlAPI
  }
  // const error =
  //   data?.authenticateUserWithPassword.__typename ===
  //   'UserAuthenticationWithPasswordFailure'
  //  data?.authenticateUserWithPassword
  //     : undefined;

  return (
    //   method="post" makes sure the password doesn't go to the url
    <Form method="post" onSubmit={handleSubmit}>
      <h2>Request a Password Reset</h2>
      <fieldset>
        {loading && <p>Loading...</p>}
        <DisplayApolloError error={error} />
        {data?.sendUserPasswordResetLink === null && (
          <p>Success! Check your email for a link!</p>
        )}

        <label htmlFor="email">
          Email
          <input
            required
            type="email"
            name="email"
            placeholder="Your Email Address"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>

        <ButtonStyles type="submit" disabled={loading}>
          Request Reset
        </ButtonStyles>
      </fieldset>
    </Form>
  );
}
