import { useEffect, useState } from 'react';
import { useUser } from '../User';
import { Checkout } from './Checkout';
import Address from '../Addresses/Address';
import { MenuStateProvider } from '../../lib/menuState';
import Addresses from '../Addresses';
import CreateAddress from '../Addresses/CreateAddress';
import { ButtonStyles } from '../styles/StateStyles';
import * as types from '../../types';

function CheckingOutUser({ me }: { me: types.User }): JSX.Element {
  const [shippingMenuState, setShippingMenuState] = useState('default');
  const [shippingAddress, setShippingAddress] = useState<types.Address>();

  useEffect(() => {
    setShippingAddress(me.defaultShipping);
  }, [me.defaultShipping]);

  useEffect(() => {
    setShippingMenuState('default');
    if (!me.defaultShipping) {
      setShippingMenuState('new');
    }
  }, [shippingAddress, me.defaultShipping]);

  function handleClick(e): void {
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
              Continue
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

export default function CheckingOut(): JSX.Element {
  const me: types.User = useUser();
  if (!me) return null;
  return <CheckingOutUser me={me} />;
}
