import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../../lib/useForm';
import Form from '../styles/Form';
import Error from '../DisplayApolloError';
import SignIn from './SignIn';
import { ButtonStyles } from '../styles/StateStyles';

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
  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
    // refetch the currently logged in user
    // refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  async function handleSubmit(e): Promise<void> {
    e.preventDefault();
    // console.log(inputs);
    // Send the email and name to the graphqlAPI
    signup().catch(console.error);
    console.log(data, loading, error);
    // console.log(res);

    if (data?.createUser) {
      resetForm();
    }
  }

  return (
    //   method="post" makes sure the password doesn't go to the url
    <>
      <Form method="post" onSubmit={handleSubmit}>
        {data?.createUser ? (
          <>
            <p>Signed up with {data.createUser.email} - Please sign in!</p>
            <SignIn />
          </>
        ) : (
          <>
            <h2>Sign Up For an Account</h2>
            <Error error={error} />
            <fieldset>
              <label htmlFor="name">
                Name
                <input
                  required
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
          </>
        )}
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
