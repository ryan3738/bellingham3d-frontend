// import { makeVar } from '@apollo/client';
import { FaWindowClose } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import CartStyles from '../styles/CartStyles';
import Supreme from '../styles/Supreme';
import formatMoney from '../../lib/formatMoney';
import { useUser } from '../User/User';
import calcTotalPrice from '../../lib/calcTotalPrice';
import { useCart } from '../../lib/cartState';
import { Payment } from '../CheckOut/Payment';
import CartItem from './CartItem';
import Shipping from '../CheckOut/Shipping';
import SeeAllProducts from '../Products/SeeAllProducts';
import { ButtonIconStyles } from '../styles/StateStyles';
import { CartItemType, UserType } from '../../types/types';
import SignUpMagicAuth from '../User/SignUpMagicAuth';
import RequestMagicAuth from '../User/RequestMagicAuth';

// export const cartShippingAddress = makeVar();

const isShippingRequired = (cart: CartItemType[]): boolean => {
  return cart.some(
    (cartItem: CartItemType) =>
      cartItem.product.inventoryItem.requiresShipping === true
  );
};

// TODO create query for users cart or local cart
const getCart = (user: UserType): CartItemType[] | [] => {
  if (user) {
    return user.cart;
  }
  // TODO Create local cart query
  return [];
};
export default function Cart(): JSX.Element {
  const user = useUser();
  const { cartOpen, closeCart } = useCart();

  const cart = getCart(user);

  return (
    <CartStyles open={cartOpen}>
      <div className="cart-content">
        <header>
          <Supreme>Your Cart</Supreme>
          <ButtonIconStyles onClick={closeCart}>
            <IconContext.Provider value={{ size: '60px' }}>
              <FaWindowClose />
            </IconContext.Provider>
          </ButtonIconStyles>
        </header>

        {cart.length > 0 ? (
          <>
            <div>
              {cart.map((cartItem) => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
              ))}
              <SeeAllProducts />
            </div>
            <footer>
              {isShippingRequired(cart) ? (
                <>
                  <p>Subtotal: {formatMoney(calcTotalPrice(cart))}</p>
                  <Shipping />
                </>
              ) : (
                <>
                  <p>Subtotal: {formatMoney(calcTotalPrice(cart))}</p>
                  <Payment />
                </>
              )}
            </footer>
          </>
        ) : (
          <div>
            {!user && (
              <>
                <div>
                  <h3>You must be signed in to add items to your cart</h3>
                  <p>Please create an account or login</p>
                </div>
                <SignUpMagicAuth /> <RequestMagicAuth />
              </>
            )}
            <h3>Your Cart is Empty</h3>
            <SeeAllProducts />
          </div>
        )}
      </div>
      <button
        type="button"
        className="overlay"
        onClick={closeCart}
        aria-label="close cart button"
      />
    </CartStyles>
  );
}
