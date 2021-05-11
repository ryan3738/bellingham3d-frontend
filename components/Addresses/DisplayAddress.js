import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { string } from 'prop-types';

const SINGLE_ADDRESS_QUERY = gql`
  query SINGLE_ADDRESS_QUERY($id: ID!) {
    CustomerAddress(where: { id: $id }) {
      id
      firstName
      lastName
      company
      address1
      address2
      city
      region
      country
      zip
      phone
      isDefaultShipping {
        id
      }
    }
  }
`;

export default function DisplayAddress({ id }) {
  // 1. We need to get the existing product
  const { data, error, loading } = useQuery(SINGLE_ADDRESS_QUERY, {
    variables: { id },
  });
  if (!data) return null;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  const address = data.CustomerAddress;
  console.log('Display Address', data);

  return (
    <>
      {address && (
        <p>
          {address.isDefaultShipping?.id && <strong>Default Address</strong>}
          <p>{`${address.firstName} ${address.lastName}`}</p>
          <p>{address.company}</p>
          <p>{address.address1}</p>
          <p>{address.address2}</p>
          <p>
            {address.city}, {address.region}
          </p>
          <p>
            {address.country} {address.zip}
          </p>
          <p>{address.phone}</p>
        </p>
      )}
    </>
  );
}

DisplayAddress.propTypes = {
  id: string,
};
