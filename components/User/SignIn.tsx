import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { IconContext } from 'react-icons/lib';
import Form from '../styles/Form';
import useForm from '../../lib/useForm';
import { CURRENT_USER_QUERY } from '../../queries/getUser';
import DisplayApolloError from '../DisplayApolloError';
import { ButtonStyles } from '../styles/StateStyles';

const eye = <FaEye />;
const eyeSlash = <FaEyeSlash />;

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;

export default function SignIn(): JSX.Element {
  const router = useRouter();
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });
  const [signin, { data, loading }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
    // refectch the currently logged in user
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  async function handleSubmit(e): Promise<void> {
    e.preventDefault(); // stop the form from submitting
    // console.log(inputs);
    const res = await signin();
    // console.log(res);

    if (res.data.authenticateUserWithPassword.item) {
      resetForm();
      router.push({
        pathname: `/products`,
      });
    }

    // Send the email and password to the graphqlAPI
  }
  const error =
    data?.authenticateUserWithPassword.__typename ===
    'UserAuthenticationWithPasswordFailure'
      ? data?.authenticateUserWithPassword
      : undefined;
  // Toggle password visibility
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = (): void => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div>
      <Form method="POST" onSubmit={handleSubmit}>
        <h2>Sign Into Your Account</h2>
        <DisplayApolloError error={error} />
        {loading && <p>Loading...</p>}

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
          <div className="pass-wrapper">
            <label htmlFor="password">
              Password
              <input
                required
                type={passwordShown ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                autoComplete="current-password"
                value={inputs.password}
                onChange={handleChange}
              />
            </label>
            <button
              className="button-icon"
              type="button"
              title="Toggle Password Visibility"
              onClick={togglePasswordVisiblity}
            >
              <IconContext.Provider value={{ size: '16px' }}>
                <i>{passwordShown ? eyeSlash : eye}</i>
              </IconContext.Provider>
            </button>
          </div>

          <ButtonStyles type="submit" disabled={loading}>
            Sign In!
          </ButtonStyles>
          <div>
            <br />
            <Link href="/requestreset">Forgot password?</Link>
          </div>
        </fieldset>
      </Form>
      <style jsx>
        {`
          .pass-wrapper {
            position: relative;
            width: 100%;

            margin-bottom: 14px;
          }
          .button-icon {
            position: absolute;
            top: 55%;
            right: 10%;
            width: auto;
            height: auto;
          }
          .button-icon:hover {
            color: var(--lightBlue);
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}
