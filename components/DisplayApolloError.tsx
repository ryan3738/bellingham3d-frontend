import styled from 'styled-components';
import { ApolloError } from '@apollo/client';

const ErrorStyles = styled.div`
  padding: 0.5rem 0;
  background: white;
  /* margin: 0.5rem 0; */
  /* border: 1px solid rgba(0, 0, 0, 0.05); */
  /* border-left: 5px solid red; */
  color: red;
  font-size: 1rem;
  width: 100%;
  max-width: 50ch;
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 0.5rem;
  }
`;

type AppProps = {
  error: ApolloError;
};

let isError = true;

const cleanupError = (error): AppProps => {
  error.message.replace('GraphQL error: ', '');
  if (
    error.message.includes('Unique constraint failed on the fields: (`email`)')
  ) {
    error.message = 'Email already in use';
    isError = false;
  }

  return error;
};

const DisplayApolloError = ({ error }: AppProps): JSX.Element => {
  if (!error || !error.message) return null;
  cleanupError(error);
  if (
    error.networkError &&
    error.networkError.message &&
    error.networkError &&
    isError
  ) {
    return (
      <>
        <ErrorStyles>
          <p data-test="graphql-error">
            {/* <strong>Network Error!</strong> */}
            {error.networkError.message.replace(
              'NetworkError',
              'Network Error'
            )}
          </p>
        </ErrorStyles>
      </>
    );
  }
  return (
    <ErrorStyles>
      <p data-test="graphql-error">
        {isError && <strong>Error!!</strong>}
        {error.message}
      </p>
    </ErrorStyles>
  );
};

export default DisplayApolloError;
