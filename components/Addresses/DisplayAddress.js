import { object } from 'prop-types';

export default function DisplayAddress({ address }) {
  return (
    <>
      {address && (
        <>
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
        </>
      )}
      {/* {!address && <CreateAddress />} */}
    </>
  );
}

DisplayAddress.propTypes = {
  address: object,
};
