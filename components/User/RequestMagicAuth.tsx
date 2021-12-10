import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../../lib/useForm';
import Form from '../styles/Form';
import DisplayApolloError from '../DisplayApolloError';
import { ButtonStyles } from '../styles/StateStyles';
import Message from '../Message';

export const REQUEST_MAGIC_AUTH_MUTATION = gql`
  mutation REQUEST_MAGIC_AUTH_MUTATION($email: String!) {
    sendUserMagicAuthLink(email: $email) {
      code
      message
    }
  }
`;

const RequestMagicAuth = function (): JSX.Element {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
  });
  const [requestMagicAuth, { data, loading, error }] = useMutation(
    REQUEST_MAGIC_AUTH_MUTATION,
    {
      variables: inputs,
      // refetch the currently logged in user
      // refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );

  async function handleSubmit(e): Promise<void> {
    e.preventDefault();
    // Send the email and password to the graphqlAPI
    await requestMagicAuth().catch(console.error);
    // resetForm();
  }

  return (
    //   method="post" makes sure the password doesn't go to the url
    <Form method="post" onSubmit={handleSubmit}>
      {/* <h2>Request a Sign In Link</h2> */}
      <DisplayApolloError error={error} />
      <Message loading={loading}>
        {data?.sendUserMagicAuthLink === null &&
          `Success! Check ${inputs.email} for a sign in link!`}
      </Message>
      <fieldset>
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
          Request Sign In Link
        </ButtonStyles>
      </fieldset>
    </Form>
  );
};

export default RequestMagicAuth;
