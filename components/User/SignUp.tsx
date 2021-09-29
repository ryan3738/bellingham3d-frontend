import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { useState } from 'react';
import useForm from '../../lib/useForm';
import Form from '../styles/Form';
import DisplayApolloError from '../DisplayApolloError';
import SignIn from './SignIn';
import { ButtonStyles } from '../styles/StateStyles';

const eye = <FaEye />;
const eyeSlash = <FaEyeSlash />;

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    createUser(data: { email: $email, name: $name, password: $password }) {
      id
      email
      name
    }
  }
`;

export default function SignUp(): JSX.Element {
  const { inputs, handleChange, resetForm } = useForm({
    name: '',
    email: '',
    password: '',
  });
  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
    // refetch the currently logged in user
    // refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  async function handleSubmit(e): Promise<void> {
    e.preventDefault();

    // Send the email and password to the graphqlAPI
    signup().catch(console.error);

    if (data?.createUser) {
      resetForm();
    }
  }

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = (): void => {
    setPasswordShown(!passwordShown);
  };

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
            {loading && <p>Loading...</p>}
            <DisplayApolloError error={error} />
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
              <div className="pass-wrapper">
                <label htmlFor="password">
                  Password
                  <input
                    required
                    type={passwordShown ? 'text' : 'password'}
                    name="password"
                    placeholder="6 characters minimum"
                    autoComplete="new-password"
                    value={inputs.password}
                    onChange={handleChange}
                  />
                </label>
                <i onClick={togglePasswordVisiblity}>
                  {passwordShown ? eyeSlash : eye}
                </i>
              </div>
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
