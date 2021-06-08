import { useEffect, useState } from 'react';
import { useUser } from '../User';
import { Checkout } from './Checkout';
import Address from '../Addresses/Address';
import { MenuStateProvider } from '../../lib/menuState';
import Addresses from '../Addresses';
import CreateAddress from '../Addresses/CreateAddress';
import { userType } from '../../lib/types';
import ButtonStyles from '../styles/ButtonStyles';

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
    if (!me.defaultShipping) {
      setShippingMenuState('new');
    }
  }, [shippingAddress, me.defaultShipping]);

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
          <h3>Shipping Address</h3>

          {/* <MenuStateProvider>
            <Address address={shippingAddress} />
          </MenuStateProvider> */}
          {/* <ShippingAddress /> */}
          {shippingMenuState === 'default' && (
            <MenuStateProvider>
              <Address address={shippingAddress} allowUpdate />
            </MenuStateProvider>
          )}
          {shippingMenuState === 'select' && (
            <Addresses
              allowUpdate
              allowDelete
              selectAddress={setShippingAddress}
            />
          )}
          {shippingMenuState === 'new' && <CreateAddress />}

          {/* TODO change focus to currently selected button  */}

          <div>
            <ButtonStyles
              type="button"
              name="default"
              value="default"
              onClick={handleClick}
              disabled={shippingMenuState === 'default'}
            >
              Return
            </ButtonStyles>
            <ButtonStyles
              type="button"
              name="select"
              value="select"
              onClick={handleClick}
              disabled={shippingMenuState === 'select'}
            >
              Select Address
            </ButtonStyles>
            <ButtonStyles
              type="button"
              name="new"
              value="new"
              onClick={handleClick}
              disabled={shippingMenuState === 'new'}
            >
              New Address
            </ButtonStyles>
          </div>
        </div>
      </div>
      <footer>
        <h3>Payment Details</h3>
        {shippingAddress && <Checkout shippingId={shippingAddress.id} />}
      </footer>
    </>
  );
}
CheckingOutUser.propTypes = {
  // id: string.isRequired,
  me: userType,
};
