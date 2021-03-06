import Link from 'next/link';
import Button from '../Button';
import { useUser } from '../User';
import { useCart } from '../../lib/cartState';
import CartCount from '../CartCount';
import NavItem from './NavItem';
// import Image from 'next/image'

export default function NavList({ showOnLarge, burgerMenuLink, props }) {
  const user = useUser();
  const { openCart } = useCart();
  return (
    <>
      <NavItem
        href="/"
        showOnLarge={showOnLarge}
        burgerMenuLink={burgerMenuLink}
      >
        Home
      </NavItem>
      <NavItem
        href="/products"
        showOnLarge={showOnLarge}
        burgerMenuLink={burgerMenuLink}
      >
        Products
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
          {/* <li
            className={`nav-link ${showOnLarge && 'show-on-large'} ${
              burgerMenuLink && 'burger-menu-link'
            }`}
          >
            <Link href="/orders">Orders</Link>
          </li> */}
          <NavItem
            href="/account"
            showOnLarge={showOnLarge}
            burgerMenuLink={burgerMenuLink}
          >
            Account
          </NavItem>
          <NavItem burgerMenuLink={burgerMenuLink}>
            <button type="button" onClick={openCart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-3 -4 24 24"
                width="32"
                height="32"
                preserveAspectRatio="xMinYMin"
                className="icon__icon"
              >
                <path d="M7 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM.962 1.923A.962.962 0 0 1 .962 0h1.151c.902 0 1.682.626 1.878 1.506l1.253 5.642c.196.88.976 1.506 1.878 1.506h7.512l1.442-5.77H6.731a.962.962 0 0 1 0-1.922h9.345a1.923 1.923 0 0 1 1.866 2.39L16.5 9.12a1.923 1.923 0 0 1-1.866 1.457H7.122a3.846 3.846 0 0 1-3.755-3.012L2.113 1.923H.962z" />
              </svg>
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
