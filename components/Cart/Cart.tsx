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

export default function Cart(): JSX.Element {
  const user = useUser();

  const { cartOpen, closeCart } = useCart();
  if (!user) return null;

  const shippingRequired = user.cart.some(
    (cartItem) => cartItem.product.inventoryItem.requiresShipping === true
  );

  return (
    <CartStyles open={cartOpen}>
      <div className="cart-content">
        <header>
          <Supreme>{user.name}'s Cart</Supreme>
          <ButtonIconStyles onClick={closeCart}>
            <IconContext.Provider value={{ size: '60px' }}>
              <FaWindowClose />
            </IconContext.Provider>
          </ButtonIconStyles>
        </header>

        {user.cart.length === 0 ? (
          <div>
            <h3>Your Cart is Empty</h3>
            <SeeAllProducts />
          </div>
        ) : (
          <>
            <div>
              {user.cart.map((cartItem) => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
              ))}
              <SeeAllProducts />
            </div>
            <footer>
              {shippingRequired ? (
                <>
                  <p>Subtotal: {formatMoney(calcTotalPrice(user.cart))}</p>
                  <Shipping />
                </>
              ) : (
                <>
                  <p>Subtotal: {formatMoney(calcTotalPrice(user.cart))}</p>
                  <Payment />
                </>
              )}
            </footer>
          </>
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
