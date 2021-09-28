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

// export const cartShippingAddress = makeVar();

const isShippingRequired = (cart): boolean => {
  return cart.some(
    (cartItem) => cartItem.product.inventoryItem.requiresShipping === true
  );
};

const getCart = (user): [] => {
  if (user) {
    return user.cart;
  }
  return [];
};

const getName = (user): string => {
  if (user) {
    return user.name;
  }
  return 'Guest';
};

export default function Cart(): JSX.Element {
  const user = useUser();
  const { cartOpen, closeCart } = useCart();

  const name = getName(user);
  const cart = getCart(user);

  return (
    <CartStyles open={cartOpen}>
      <div className="cart-content">
        <header>
          <Supreme>{name}'s Cart</Supreme>
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
