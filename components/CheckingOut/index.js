import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import Supreme from '../styles/Supreme';
import formatMoney from '../../lib/formatMoney';
import { useUser } from '../User';
import calcTotalPrice from '../../lib/calcTotalPrice';
import { Checkout } from './Checkout';
import Button from '../Button';
import CartItem from '../Cart/CartItem';
import UpdateAddress from '../Addresses/UpdateAddress';
import DisplayAddress from '../Addresses/DisplayAddress';
import Address from '../Addresses/Address';
import { MenuStateProvider } from '../../lib/menuState';
import Addresses from '../Addresses';
import CreateAddress from '../Addresses/CreateAddress';
import { returnAddress } from '../../lib/returnAddress';
import { SINGLE_ADDRESS_QUERY } from '../../queries/getSingleAddress';
import DisplayError from '../ErrorMessage';

export default function CheckingOut() {
  const me = useUser();
  if (!me) return null;
  return <CheckingOutUser me={me} />;
}

function CheckingOutUser({ me }) {
  const [shippingMenuState, setShippingMenuState] = useState('default');
  const [shippingAddress, setShippingAddress] = useState();

  // TODO Add single item query for currently selected shipping address
  // const { data, error, loading } = useQuery(SINGLE_ADDRESS_QUERY, {
  //   variables: { id: defaultShippingId },
  // });
  // if (loading) return <p>Loading...</p>;
  // if (error) return <DisplayError error={error} />;
  // console.log('address data', data);

  // TODO Add billing address in if necessary
  // const [billingAddress, setBillingAddress] = useState(
  //   me.defaultShipping || newAddress
  // );
  // console.log('Default Shipping', me.defaultShipping);
  // console.log('Cart', me.cart);

  useEffect(() => {
    setShippingAddress(me.defaultShipping);
  }, [me.defaultShipping]);

  useEffect(() => {
    setShippingMenuState('default');
  }, [shippingAddress]);

  console.log(shippingMenuState === 'default');

  function handleClick(e) {
    setShippingMenuState(() => e.target.value);
  }

  return (
    <>
      {/* <header>
        <Supreme>Order Summary</Supreme>
      </header> */}
      <div>
        {/* {me.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))} */}

        <div>
          <h4>Shipping Address</h4>

          {/* <MenuStateProvider>
            <Address address={shippingAddress} />
          </MenuStateProvider> */}
          {/* <ShippingAddress /> */}
          {shippingMenuState === 'default' && (
            <MenuStateProvider>
              <Address
                address={shippingAddress}
                updateAddress={setShippingAddress}
              />
            </MenuStateProvider>
          )}
          {shippingMenuState === 'select' && (
            <Addresses
              updateAddress={setShippingAddress}
              selectAddress={setShippingAddress}
            />
          )}
          {shippingMenuState === 'new' && <CreateAddress />}

          {/* TODO change focus to currently selected button  */}

          <div>
            <button
              type="button"
              name="default"
              value="default"
              onClick={handleClick}
              disabled={shippingMenuState === 'default'}
            >
              Return
            </button>
            <button
              type="button"
              name="select"
              value="select"
              onClick={handleClick}
              disabled={shippingMenuState === 'select'}
            >
              Select Address
            </button>
            <button
              type="button"
              name="new"
              value="new"
              onClick={handleClick}
              disabled={shippingMenuState === 'new'}
            >
              New Address
            </button>
          </div>
        </div>
      </div>
      <footer>
        <h4>Payment Details</h4>
        {shippingAddress && <Checkout shippingId={shippingAddress.id} />}
      </footer>
    </>
  );
}
