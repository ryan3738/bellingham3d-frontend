import { useEffect, useState } from 'react';
import Supreme from '../styles/Supreme';
import formatMoney from '../../lib/formatMoney';
import { useUser } from '../User';
import calcTotalPrice from '../../lib/calcTotalPrice';
import { Checkout } from '../Checkout';
import Button from '../Button';
import CartItem from '../Cart/CartItem';
import UpdateAddress from '../Addresses/UpdateAddress';
import DisplayAddress from '../Addresses/DisplayAddress';
import Address from '../Addresses/Address';
import { MenuStateProvider } from '../../lib/menuState';

export default function CheckingOut() {
  const me = useUser();
  const { shippingAddress, setShippingAddress } = useState();
  if (!me) return null;

  console.log('Default Shipping', me.defaultShipping);
  console.log('Cart', me.cart);
  return (
    <>
      <header>
        <Supreme>Order Summary</Supreme>
      </header>
      <div>
        {me.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div>
          <h4>Shipping Address</h4>
          {/* <DisplayAddress id={me.defaultShipping.id} /> */}
          <MenuStateProvider>
            <Address address={me.defaultShipping} />
          </MenuStateProvider>
          <div>
            <button>Select Address</button>
            <button>New Address</button>
            <button>Update Address</button>
          </div>
        </div>
      </div>
      <footer>
        <p>Subtotal: {formatMoney(calcTotalPrice(me.cart))}</p>
        <h4>Pay</h4>
        <Checkout />
      </footer>
    </>
  );
}
