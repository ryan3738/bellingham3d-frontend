import CartStyles from '../styles/CartStyles';
import CloseButton from '../styles/CloseButton';
import Supreme from '../styles/Supreme';
import formatMoney from '../../lib/formatMoney';
import { useUser } from '../User';
import calcTotalPrice from '../../lib/calcTotalPrice';
import { useCart } from '../../lib/cartState';
import { Checkout } from '../Checkout';
import Button from '../Button';
import CartItem from './CartItem';

export default function Cart() {
  const me = useUser();
  const { cartOpen, closeCart } = useCart();
  if (!me) return null;
  console.log(me.cart);
  const shippingRequired = me.cart.some(
    (cartItem) => cartItem.product.inventoryItem.requiresShipping === true
  );
  console.log('shipping', shippingRequired);
  console.log('Cart', me.cart);
  return (
    <CartStyles open={cartOpen}>
      <header>
        <Supreme>{me.name}'s Cart</Supreme>
        <CloseButton onClick={closeCart}>&times;</CloseButton>
      </header>
      <div>
        {me.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <footer>
        <p>Shipping: {formatMoney(calcTotalPrice(me.cart))}</p>
        <p>Subtotal: {formatMoney(calcTotalPrice(me.cart))}</p>
        {shippingRequired ? (
          <Button internalLink="/checkingout">Check Out</Button>
        ) : (
          <Checkout />
        )}
      </footer>
    </CartStyles>
  );
}
