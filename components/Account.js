import Link from 'next/link';
import styled from 'styled-components';
import RequestReset from './RequestReset';
import SignOut from './SignOut';
import ContainerGrid from './styles/ContainerGrid';
import { useUser } from './User';

export default function Account(props) {
  const me = useUser();
  // console.log(me);
  return (
    <ContainerGrid>
      <h2>Account Dashboard</h2>
      <h3>
        <Link href="/sell">Add New Product</Link>
      </h3>
      <h3>
        <Link href="/orders">Order History</Link>
      </h3>
      <h3>
        <Link href="/requestreset">Order History</Link>
      </h3>
      <SignOut>Sign Out</SignOut>
    </ContainerGrid>
  );
}
