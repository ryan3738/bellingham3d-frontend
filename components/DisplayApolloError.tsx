import styled from 'styled-components';
import { ApolloError } from '@apollo/client';

const ErrorStyles = styled.div`
  padding: 1rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid red;
  font-size: 1rem;
  width: 100%;
  max-width: 50ch;
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 1rem;
  }
`;

type AppProps = {
  error: ApolloError;
};

const DisplayApolloError = ({ error }: AppProps): JSX.Element => {
  if (!error || !error.message) return null;
  // console.log('ERROR', error);
  // if (
  //   error.networkError &&
  //   error.networkError.message &&
  //   error.networkError
  // ) {
  //   return (
  //     <>
  //       {error.graphQLErrors.map((graphQLError, i) => (
  //         <ErrorStyles key={i}>
  //           <p data-test="graphql-error">
  //             <strong>GraphQL Error!</strong>
  //             {graphQLError.message.replace('GraphQL error: ', '')}
  //           </p>
  //         </ErrorStyles>
  //       ))}
  //     </>
  //   );
  // }

  // if (error.message && error.graphQLErrors && error.graphQLErrors.length) {
  //   return (
  //     <>
  //       {error.graphQLErrors.map((graphQLError, i) => (
  //         <ErrorStyles key={i}>
  //           <p data-test="graphql-error">
  //             <strong>GraphQL Error!</strong>
  //             {graphQLError.message.replace('GraphQL error: ', '')}
  //           </p>
  //         </ErrorStyles>
  //       ))}
  //     </>
  //   );
  // }
  return (
    <ErrorStyles>
      <p data-test="graphql-error">
        <strong>Error!!</strong>
        {error.message.replace('GraphQL error: ', '')}
      </p>
    </ErrorStyles>
  );
};

export default DisplayApolloError;
