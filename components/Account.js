import Link from 'next/link';
import styled from 'styled-components';
import RequestReset from './RequestReset';
import SignOut from './SignOut';
import ContainerGrid from './styles/ContainerGrid';
import { useUser } from './User';

export default function Account(props) {
  const me = useUser();
  if (!me) return null;
  // console.log(me);
  return (
    <ContainerGrid>
      <h1>Account Dashboard</h1>
      <Link href="/sell">Add New Product</Link>
      <Link href="/orderhistory">Order History</Link>
      <Link href="/requestreset">Reset Your Password</Link>
      <SignOut>Sign Out</SignOut>
    </ContainerGrid>
  );
}
