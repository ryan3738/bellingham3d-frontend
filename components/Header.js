import Link from 'next/link';
import styled from 'styled-components';
import { siteData } from '../public/site-data';
import Cart from './Cart';
import Nav from './Nav';
import Search from './Search';

const Logo = styled.h1`
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
  position: relative;
  z-index: 2;
  background: var(--red);
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

  .sub-bar {
    border-bottom: 1px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          {/* <Image
          src=""
          /> */}
          <Link href="/">B-3D</Link>
        </Logo>
        <Nav />
      </div>
      <div className="sub-bar">
        <Search />
      </div>
      <Cart />
    </HeaderStyles>
  );
}
