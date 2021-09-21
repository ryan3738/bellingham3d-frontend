import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { useUser } from '../User/User';
import { useCart } from '../../lib/cartState';
import CartCount from '../Cart/CartCount';
import NavItem from './NavItem';
import { ColorStateStyles } from '../styles/StateStyles';
// import Image from 'next/image'

type AppProps = {
  showOnLarge?: boolean;
  showInBurgerMenu?: boolean;
};

export default function NavList({
  showOnLarge,
  showInBurgerMenu,
}: AppProps): JSX.Element {
  const user = useUser();
  const { openCart } = useCart();
  return (
    <>
      <NavItem
        href="/products"
        showOnLarge={showOnLarge}
        showInBurgerMenu={showInBurgerMenu}
      >
        Products
      </NavItem>
      <NavItem
        href="/custom"
        showOnLarge={showOnLarge}
        showInBurgerMenu={showInBurgerMenu}
      >
        Custom
      </NavItem>
      <NavItem
        href="/about"
        showOnLarge={showOnLarge}
        showInBurgerMenu={showInBurgerMenu}
      >
        About
      </NavItem>
      <NavItem
        href="/contact"
        showOnLarge={showOnLarge}
        showInBurgerMenu={showInBurgerMenu}
      >
        Contact
      </NavItem>

      {user && (
        <>
          <NavItem
            href="/account"
            showOnLarge={showOnLarge}
            showInBurgerMenu={showInBurgerMenu}
          >
            <IconContext.Provider value={{ size: '24px' }}>
              <div className="icons" title="Account Dashboard">
                <FaUser />
              </div>
            </IconContext.Provider>
          </NavItem>
          <NavItem showInBurgerMenu={showInBurgerMenu}>
            <button type="button" onClick={openCart} title="Open Cart">
              <ColorStateStyles>
                <IconContext.Provider value={{ size: '24px' }}>
                  <div className="icons">
                    <FaShoppingCart />
                  </div>
                </IconContext.Provider>
              </ColorStateStyles>
              <CartCount
                count={user.cart.reduce(
                  (tally, cartItem) =>
                    tally + (cartItem.product ? cartItem.quantity : 0),
                  0
                )}
              />
            </button>
          </NavItem>
        </>
      )}
      {!user && (
        <>
          <NavItem
            href="/signin"
            showOnLarge={showOnLarge}
            showInBurgerMenu={showInBurgerMenu}
          >
            Sign In
          </NavItem>
          <NavItem
            href="/signup"
            showOnLarge={showOnLarge}
            showInBurgerMenu={showInBurgerMenu}
          >
            Sign Up
          </NavItem>
        </>
      )}

      <style jsx>{`
         {
          /* .icons {
          color: var(--navyBlue);
        } */
        }

        button {
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          text-transform: uppercase;
          background: none;
          border: 0;
          cursor: pointer;
        }
      `}</style>
      <style jsx>{`
        .burger-menu-link {
          margin: 0;
        }
        .show-on-large {
          display: none;
        }

        @media (min-width: 769px) {
          .show-on-large {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
