import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/link-error';
import { getDataFromTree } from '@apollo/client/react/ssr';
import { createUploadLink } from 'apollo-upload-client';
import withApollo from 'next-with-apollo';
import { developmentEndpoint, previewEndpoint, productionEndpoint } from '../config';
import paginationField from './paginationField';

const getEndopint = () => {
if (process.env.ENVIRONMENT === 'development') {
  return developmentEndpoint;
}
if (process.env.ENVIRONMENT === 'preview') {
  return previewEndpoint;
}
if (process.env.ENVIRONMENT === 'production') {
  return productionEndpoint;
}
}

const graphqlEndpoint =

process.env.NODE_ENV === 'production' ? prodEndpoint : endpoint;



const allProductsTypePolicy = {
  // Keys in this object will be validated against the typed on your schema
  allProducts: paginationField(),
};

// Custom apollo client that will be injected into front end
const createClient = ({ headers, initialState }) =>
  new ApolloClient({
    ssrMode: true,
    ssrForceFetchDelay: 100, // in milliseconds
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError, operation }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          );
        if (networkError)
          console.error(
            `[Network error ${operation.operationName}]: ${networkError.message}. Backend is unreachable. Is it running?`
          );
      }),
      // this uses apollo-link-http under the hood, so all the options here come from that package
      createUploadLink({
        uri: graphqlEndpoint,
        fetchOptions: {
          credentials: 'include',
        },
        // pass the headers along from this request. This enables SSR with logged in state
        headers: {
          cookie: headers?.cookie,
        },
      }),
    ]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            ...allProductsTypePolicy,
          },
        },
      },
    }).restore(initialState || {}),
  });

export default withApollo(createClient, { getDataFromTree });
