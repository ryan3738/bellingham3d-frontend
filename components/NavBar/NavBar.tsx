import Link from 'next/link';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import BurgerMenu from './BurgerMenu';
import { useOnClickOutside } from '../../lib/hooks';
import NavList from './NavList';
import Search from '../Search';
import Cart from '../Cart/Cart';
import NavSpacer from './NavSpacer';

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  padding: 0 var(--spacing);
  min-width: 42px;
  height: 56px;
  width: 200%;
  margin: 0;
  font-weight: 900;
  text-decoration: none;
  width: 100%;
  height: auto;
  padding: 0 var(--spacing);
  margin: 0;

  a {
    color: var(--white);
    text-transform: uppercase;
    :hover {
      text-decoration: none;
    }
  }
`;

const LogoStyles = styled.h1`
  --notchSize: 15px;
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

  background: var(--navyBlue-800);
  padding: 0.75rem;
  margin: 2.5px;
  line-height: 1;
  position: relative;
  cursor: pointer;
  z-index: 2;
  transition: all 0.25s;

  :hover {
    opacity: var(--hover);
    background: var(--navyBlue-600);
  }
`;

type AppProps = {
  children?: React.ReactNode;
};

export default function NavBar({ children }: AppProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside({ ref: node, handler: () => setOpen(false) });
  return (
    <>
      <div className="bar">
        <nav>
          {children}
          <div className="nav-list">
            <div className="burger">
              <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
              </div>
              <div>
                <BurgerMenu open={open} />
              </div>
            </div>
            <div>
              <LogoWrapper>
                <Link href="/">
                  <a title="Home">
                    <LogoStyles>B-3D</LogoStyles>
                  </a>
                </Link>
              </LogoWrapper>
            </div>
            <NavList showOnLarge />
          </div>
        </nav>
        <Search />
        <Cart />
      </div>
      <NavSpacer />
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
        a,
        ul,
        li {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .bar {
          right: 0;
          left: 0;
          z-index: 999;
          position: fixed;
          background: white;
          opacity: 0.97;
          width: 100%;
          height: 7em;
          display: flex;
          flex-direction: column;
          justify-content: stretch;
          align-items: stretch;
          align-content: stretch;
          justify-items: stretch;
        }
        .sub-bar {
          display: grid;
          grid-template-columns: auto 1fr;
        }
        .nav-list {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          justify-items: center;
          align-items: center;
          align-contents: center;
          width: 100%;
          height: 4em;
          border-bottom: 2.5px solid var(--navyBlue-800, black);
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
    </>
  );
}
