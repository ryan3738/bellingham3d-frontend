import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { useState } from 'react';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import { CURRENT_USER_QUERY } from './User';
import Error from './ErrorMessage';
import SignIn from './SignIn';

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

export default function SignUp() {
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

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(inputs);
    signup().catch(console.error);
    console.log(data, loading, error);
    // console.log(res);

    if (data?.createUser) {
      resetForm();
    }
    // Send the email and password to the graphqlAPI
  }
  // const error =
  //   data?.authenticateUserWithPassword.__typename ===
  //   'UserAuthenticationWithPasswordFailure'
  //     ? data?.authenticateUserWithPassword
  //     : undefined;
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
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
            <Error error={error} />
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
                    autoComplete="password"
                    value={inputs.password}
                    onChange={handleChange}
                  />
                </label>
                <i onClick={togglePasswordVisiblity}>
                  {passwordShown ? eyeSlash : eye}
                </i>
              </div>
              <button type="submit">Sign Up!</button>
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
