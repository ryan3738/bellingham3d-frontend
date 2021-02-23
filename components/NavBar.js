import Link from 'next/link';
import React, { useState, useRef } from 'react';
// import Image from 'next/image'
import styled from 'styled-components';
import Burger from './Burger';
import BurgerMenu from './BurgerMenu';
import { useOnClickOutside } from '../lib/hooks';
import NavList from './NavList';
import Search from './Search';
import Cart from './Cart';

const LogoStyles = styled.h1`
  --notchSize: 15px;
  /* clip-path:
    polygon(
      0% 20px,                 top left
      20px 0%,                 top left
      calc(100% - 20px) 0%,    top right
      100% 20px,               top right
      100% calc(100% - 20px),  bottom right
      calc(100% - 20px) 100%,  bottom right
      20px 100%,               bottom left
      0 calc(100% - 20px)      bottom left
    ); */
  clip-path: polygon(
    0% var(--notchSize),
    var(--notchSize) 0%,
    100% 0%,
    100% var(--notchSize),
    100% calc(100% - var(--notchSize)),
    calc(100% - var(--notchSize)) 100%,
    var(--notchSize) 100%,
    0% 100%
  );

  font-size: 4rem;
  margin-left: 2rem;
  line-height: 1;
  position: relative;
  z-index: 2;
  background: var(--red);
  padding: 0.75rem;
  margin: 2.5px;
  /* transform: skew(-7deg); */

  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }
`;

export default function NavBar({ children, open, setOpen }) {
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <HeaderStyles>
      <div className="nav-bar">
        <nav className="nav-list">
          <LogoStyles>
            <Link href="/">B-3D</Link>
          </LogoStyles>
          <NavList showOnLarge />
          <div className="burger">
            <div ref={node}>
              <Burger open={open} setOpen={setOpen} />
              <BurgerMenu open={open} setOpen={setOpen} />
            </div>
          </div>
        </nav>

        <Search />
        <Cart />
      </div>
      <style jsx>{`
        .welcome-logo {
          position: absolute;
          top: 0.5rem;
          left: 1rem;
          width: 6rem;
        }
        .title {
          padding: 0.5em;
          font-size: 2.2rem;
          color: white;
        }
        .nav-bar {
          right: 0;
          left: 0;
          z-index: 999;
          position: fixed;
          background: white;
          opacity: 0.97;
          width: 100%;
          height: 7em;
        }
        .sub-bar {
          display: grid;
          grid-template-columns: auto 1fr;
        }
        .nav-list {
          display: flex;
          justify-content: center;
          align-items: center;
          align-content: center;
          justify-items: center;
          height: 4em;
          top: 0;
          border-bottom: 2.5px solid var(--black, black);
        }

        .nav-list a:hover {
          background: var(--navyBlue);
          color: var(--offWhite);
        }

        @media (min-width: 769px) {
          .burger {
            display: none;
          }
          .title {
            display: none;
          }
        }
      `}</style>
    </HeaderStyles>
  );
}
