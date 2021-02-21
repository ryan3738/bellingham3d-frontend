import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import { siteData } from '../public/site-data';
import Cart from './Cart';
// import Nav from './Nav';
import NavBar from './NavBar';
import Search from './Search';

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
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bar">
        {/* <Logo> */}
        {/* <Image
          src=""
          /> */}
        {/* <Link href="/">B-3D</Link> */}
        {/* </Logo> */}
        {/* <Nav /> */}

        <NavBar open={open} setOpen={setOpen} />
      </div>
      <div className="sub-bar">{/* <Search /> */}</div>
      {/* <Cart /> */}
      <style jsx>{`
        .header-spacer {
          height: 7em;
        }
      `}</style>
      <div className="header-spacer" />
    </>
  );
}
