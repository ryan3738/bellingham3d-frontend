import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/link-error';
import { getDataFromTree } from '@apollo/client/react/ssr';
import { createUploadLink } from 'apollo-upload-client';
import withApollo from 'next-with-apollo';
import { developmentEndpoint, previewEndpoint, productionEndpoint, localEndpoint } from '../config';
import paginationField from './paginationField';

const getEndpoint = () => {
  if (process.env.NEXT_PUBLIC_API_ENV === 'local') {
    console.log('Using local endpoint');
    return localEndpoint;
  }
  if (process.env.NEXT_PUBLIC_API_ENV === 'development') {
    console.log('Using development endpoint');
    return developmentEndpoint;
  }
  if (process.env.NEXT_PUBLIC_API_ENV === 'preview') {
    console.log('Using preview endpoint');
    return previewEndpoint;
  }
  if (process.env.NEXT_PUBLIC_API_ENV === 'production') {
    console.log('Using production endpoint');
    return productionEndpoint;
  }
  console.log('Using no endpoint');
};

console.log('Using endpoint: ', getEndpoint());
const graphqlEndpoint = getEndpoint();

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
