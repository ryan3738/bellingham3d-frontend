import { useEffect, useState } from 'react';
import { useUser } from '../User/User';
import { Payment } from './Payment';
import Address from '../Addresses/Address';
import { MenuStateProvider } from '../../lib/menuState';
import Addresses from '../Addresses/Addresses';
import CreateAddress from '../Addresses/CreateAddress';
import { ButtonStyles } from '../styles/StateStyles';
import { AddressType, UserType } from '../../types/types';

function CheckingOutUser({ me }: { me: UserType }): JSX.Element {
  const [shippingMenuState, setShippingMenuState] = useState('default');
  const [shippingAddress, setShippingAddress] = useState<AddressType>();

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
        <div>
          <h3>Shipping Address</h3>
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
        {shippingAddress && <Payment shippingId={shippingAddress.id} />}
      </footer>
    </>
  );
}

export default function Shipping(): JSX.Element {
  const me = useUser();
  if (!me) return null;
  return <CheckingOutUser me={me} />;
}
