import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import { siteData } from '../public/site-data';
import Cart from './Cart';
import HeaderSpacer from './HeaderSpacer';
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
        <NavBar open={open} setOpen={setOpen} />
      </div>
      <div className="sub-bar">{/* <Search /> */}</div>
      <HeaderSpacer />
    </>
  );
}
