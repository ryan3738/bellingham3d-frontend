import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { USER_ADDRESSES_QUERY } from '.';

const DELETE_ADDRESS_MUTATION = gql`
  mutation DELETE_ADDRESS_MUTATION($id: ID!) {
    deleteCustomerAddress(id: $id) {
      id
      firstName
    }
  }
`;

function update(cache, payload) {
  console.log(payload);
  console.log('running the update function after delete');
  cache.evict(cache.identify(payload.data.deleteCustomerAddress));
}

export default function DeleteAddress({ id, children }) {
  const [deleteCustomerAddress, { loading, error }] = useMutation(
    DELETE_ADDRESS_MUTATION,
    {
      variables: { id },
      update,
      refetchQueries: [{ query: USER_ADDRESSES_QUERY }],
    }
  );
  return (
    <button
      type="button"
      disabled={loading}
      onClick={() => {
        if (confirm('Are you sure you want to delete this address?')) {
          // Go ahead and delete it
          console.log('Delete!...');
          deleteCustomerAddress().catch((err) => alert(err.message));
        }
      }}
    >
      {children}
    </button>
  );
}
