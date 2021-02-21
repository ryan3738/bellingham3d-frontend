import Link from 'next/link';
import Button from './Button';
import siteData from '../public/site-data';
import { useUser } from './User';
import { useCart } from '../lib/cartState';
import CartCount from './CartCount';
// import Image from 'next/image'

export default function NavList(props) {
  const user = useUser();
  const { openCart } = useCart();
  return (
    <>
      <span
        className={`nav-link ${'showOnLarge' in props && 'show-on-large'} ${
          'burgerMenuLink' in props && 'burger-menu-link'
        }`}
      >
        <Link href="/products">Products</Link>
      </span>
      <span
        className={`nav-link ${'showOnLarge' in props && 'show-on-large'} ${
          'burgerMenuLink' in props && 'burger-menu-link'
        }`}
      >
        <Link href="/#about">ABOUT</Link>
      </span>
      <span
        className={`nav-link ${'showOnLarge' in props && 'show-on-large'} ${
          'burgerMenuLink' in props && 'burger-menu-link'
        }`}
      >
        <Link href="/#contact">Contact</Link>
      </span>
      {user && (
        <>
          <span
            className={`nav-link ${'showOnLarge' in props && 'show-on-large'} ${
              'burgerMenuLink' in props && 'burger-menu-link'
            }`}
          >
            <Link href="/sell">Sell</Link>
          </span>
          <span
            className={`nav-link ${'showOnLarge' in props && 'show-on-large'} ${
              'burgerMenuLink' in props && 'burger-menu-link'
            }`}
          >
            <Link href="/orders">Orders</Link>
          </span>
          <span
            className={`nav-link ${'showOnLarge' in props && 'show-on-large'} ${
              'burgerMenuLink' in props && 'burger-menu-link'
            }`}
          >
            <Link href="/account">Account</Link>
          </span>
          <span
            className={`nav-link ${'showOnLarge' in props && 'show-on-large'} ${
              'burgerMenuLink' in props && 'burger-menu-link'
            }`}
          >
            <button type="button" onClick={openCart}>
              My Cart
              <CartCount
                count={user.cart.reduce(
                  (tally, cartItem) =>
                    tally + (cartItem.product ? cartItem.quantity : 0),
                  0
                )}
              />
            </button>
          </span>
        </>
      )}
      {!user && (
        <>
          <span
            className={`nav-link ${'showOnLarge' in props && 'show-on-large'} ${
              'burgerMenuLink' in props && 'burger-menu-link'
            }`}
          >
            <Link href="/signin">Sign In</Link>
          </span>
        </>
      )}

      <div
        className={`nav-link ${'showOnLarge' in props && 'show-on-large'} ${
          'burgerMenuLink' in props && 'burger-menu-link'
        }`}
      />
      <style jsx>{`
        .nav-link {
          text-transform: uppercase;
          padding: 1em;
          margin: auto;
        }
        button {
          padding: 1rem 3rem;
          display: flex;
          align-items: center;
          position: relative;
          text-transform: uppercase;
          font-weight: 900;
          font-size: 1em;
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
