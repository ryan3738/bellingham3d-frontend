import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { useUser } from '../User';
import { useCart } from '../../lib/cartState';
import CartCount from '../Cart/CartCount';
import NavItem from './NavItem';
// import Image from 'next/image'

export default function NavList({ showOnLarge, burgerMenuLink, props }) {
  const user = useUser();
  const { openCart } = useCart();
  return (
    <>
      <NavItem
        href="/products"
        showOnLarge={showOnLarge}
        burgerMenuLink={burgerMenuLink}
      >
        Products
      </NavItem>
      <NavItem
        href="/custom"
        showOnLarge={showOnLarge}
        burgerMenuLink={burgerMenuLink}
      >
        Custom
      </NavItem>
      <NavItem
        href="/about"
        showOnLarge={showOnLarge}
        burgerMenuLink={burgerMenuLink}
      >
        About
      </NavItem>
      <NavItem
        href="/contact"
        showOnLarge={showOnLarge}
        burgerMenuLink={burgerMenuLink}
      >
        Contact
      </NavItem>

      {user && (
        <>
          <NavItem
            href="/account"
            showOnLarge={showOnLarge}
            burgerMenuLink={burgerMenuLink}
          >
            <IconContext.Provider value={{ size: '24px' }}>
              <div className="icons">
                <FaUser />
              </div>
            </IconContext.Provider>
          </NavItem>
          <NavItem burgerMenuLink={burgerMenuLink}>
            <button type="button" onClick={openCart}>
              <IconContext.Provider value={{ size: '24px' }}>
                <div className="icons">
                  <FaShoppingCart />
                </div>
              </IconContext.Provider>
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
            burgerMenuLink={burgerMenuLink}
          >
            Sign In
          </NavItem>
          <NavItem
            href="/signup"
            showOnLarge={showOnLarge}
            burgerMenuLink={burgerMenuLink}
          >
            Sign Up
          </NavItem>
        </>
      )}

      <style jsx>{`
        .icons {
          color: var(--navyBlue);
        }

        .nav-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-transform: uppercase;
          padding: 1rem;
          margin: auto;
          font-weight: 900;
          cursor: pointer;
        }
        button {
          padding: 0;
          margin: 0;
          display: flex;
          align-items: center;
          position: relative;
          text-transform: uppercase;
          background: none;
          border: 0;
          cursor: pointer;
        }

        a:hover {
          color: var(--medium-emphasis-text);
          background: var(--primary-color-desaturated);
          color: var(--background-color);
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
