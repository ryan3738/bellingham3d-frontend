import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import { siteData } from '../public/site-data';
import Cart from './Cart';
import NavSpacer from './NavBar/NavSpacer';
// import Nav from './Nav';
import NavBar from './NavBar/NavBar';
import Search from './Search';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <NavBar open={open} setOpen={setOpen} />
      <NavSpacer />
    </>
  );
}
