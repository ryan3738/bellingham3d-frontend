import { makeVar } from '@apollo/client';
import CartStyles from '../styles/CartStyles';
import CloseButton from '../styles/CloseButton';
import Supreme from '../styles/Supreme';
import formatMoney from '../../lib/formatMoney';
import { useUser } from '../User';
import calcTotalPrice from '../../lib/calcTotalPrice';
import { useCart } from '../../lib/cartState';
import { Checkout } from '../CheckingOut/Checkout';
import Button from '../Button';
import CartItem from './CartItem';
import CheckingOut from '../CheckingOut';

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
        <CloseButton onClick={closeCart}>&times;</CloseButton>
      </header>
      <div>
        {me.cart.length === 0 && (
          <>
            <h3>Your Cart is Empty</h3>
            <Button onClick={closeCart} internalLink="/products">
              See All Products
            </Button>
          </>
        )}
        {me.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <footer>
        {shippingRequired ? (
          <>
            {/* <p>Shipping: Check out to Add Shipping Info</p> */}
            <p>Subtotal: {formatMoney(calcTotalPrice(me.cart))}</p>
            <CheckingOut />
            {/* <Button onClick={closeCart} internalLink="/checkingout">
              Check Out
            </Button> */}
          </>
        ) : (
          <>
            <p>Subtotal: {formatMoney(calcTotalPrice(me.cart))}</p>
            <Checkout />
          </>
        )}
      </footer>
    </CartStyles>
  );
}
