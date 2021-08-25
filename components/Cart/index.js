import { makeVar } from '@apollo/client';
import { FaWindowClose } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import CartStyles from '../styles/CartStyles';
import Supreme from '../styles/Supreme';
import formatMoney from '../../lib/formatMoney';
import { useUser } from '../User';
import calcTotalPrice from '../../lib/calcTotalPrice';
import { useCart } from '../../lib/cartState';
import { Checkout } from '../CheckingOut/Checkout';
import CartItem from './CartItem';
import CheckingOut from '../CheckingOut';
import SeeAllProducts from '../Products/SeeAllProducts';
import { ButtonIconStyles } from '../styles/StateStyles';

export const cartShippingAddress = makeVar();

export default function Cart() {
  const me = useUser();

  const { cartOpen, closeCart } = useCart();
  if (!me) return null;

  // useEffect(() => {
  //   cartShippingAddress(me.defaultShipping);
  //   console.log('Default Shipping', me.defaultShipping);
  //   console.log('cartShippingAddress', cartShippingAddress());
  // }, [me.defaultShipping]);

  const shippingRequired = me.cart.some(
    (cartItem) => cartItem.product.inventoryItem.requiresShipping === true
  );
  // console.log('Is shipping required?', shippingRequired);
  // console.log('Cart', me.cart);
  return (
    <CartStyles open={cartOpen}>
      <header>
        <Supreme>{me.name}'s Cart</Supreme>
        <ButtonIconStyles onClick={closeCart}>
          <IconContext.Provider value={{ size: '60px' }}>
            <FaWindowClose />
          </IconContext.Provider>
        </ButtonIconStyles>
      </header>

      {me.cart.length === 0 ? (
        <div>
          <h3>Your Cart is Empty</h3>
          <SeeAllProducts />
        </div>
      ) : (
        <>
          <div>
            {me.cart.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <SeeAllProducts />
          </div>
          <footer>
            {shippingRequired ? (
              <>
                <p>Subtotal: {formatMoney(calcTotalPrice(me.cart))}</p>
                <CheckingOut />
              </>
            ) : (
              <>
                <p>Subtotal: {formatMoney(calcTotalPrice(me.cart))}</p>
                <Checkout />
              </>
            )}
          </footer>
        </>
      )}
    </CartStyles>
  );
}
