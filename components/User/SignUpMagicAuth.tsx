import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../../lib/useForm';
import Form from '../styles/Form';
import DisplayApolloError from '../DisplayApolloError';
import { ButtonStyles } from '../styles/StateStyles';
import { REQUEST_MAGIC_AUTH_MUTATION } from './RequestMagicAuth';
import Message from '../Message';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($email: String!, $name: String!) {
    createUser(data: { email: $email, name: $name }) {
      id
      email
      name
    }
  }
`;

export default function SignUpMagicAuth(): JSX.Element {
  const { inputs, handleChange, resetForm } = useForm({
    name: '',
    email: '',
  });
  const [
    signup,
    { data: singupData, loading: singupLoading, error: singupError },
  ] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
  });

  const [requestMagicAuth, { data, loading, error }] = useMutation(
    REQUEST_MAGIC_AUTH_MUTATION,
    {
      variables: inputs,
    }
  );

  async function handleSubmit(e): Promise<void> {
    e.preventDefault();
    // Send the email and name to the graphqlAPI
    signup().catch(console.error);

    if (singupData?.createUser) {
      console.log(
        `A user with email ${inputs.email} already exists. Sending a login link.`
      );
    }
    await requestMagicAuth().catch(console.error);
    if (data) {
      // resetForm();
    }
  }
  // const isLoading = true;

  return (
    //   method="post" makes sure the password doesn't go to the url
    <>
      <Form method="post" onSubmit={handleSubmit}>
        <h2>Sign Up For an Account</h2>
        <DisplayApolloError error={singupError || error} />
        <Message loading={singupLoading || loading}>
          {data?.sendUserMagicAuthLink === null &&
            `Success! Check ${inputs.email} for a sign in link!`}
        </Message>
        <fieldset>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              autoComplete="name"
              value={inputs.name}
              onChange={handleChange}
            />
          </label>
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
          <ButtonStyles type="submit">Sign Up!</ButtonStyles>
        </fieldset>
      </Form>
      <style jsx>
        {`
          .pass-wrapper {
            position: relative;
            width: 100%;
            margin-bottom: 14px;
          }
          i {
            position: absolute;
            top: 55%;
            right: 10%;
          }
          i:hover {
            color: var(--lightBlue);
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
}
