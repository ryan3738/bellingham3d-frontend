import Link from 'next/link';
import styled from 'styled-components';
import RequestReset from './RequestReset';
import SignOut from './SignOut';
import { useUser } from './User';

const ContainerStyles = styled.div`
  max-width: 1120px;
  width: 100%;
  height: 100%;
  display: inline-grid;
  align-items: start;
  align-content: start;
  justify-content: start;
  justify-items: start;
  grid-gap: 10px;
  padding: 0;
  margin: 0 auto;
`;

export default function Account(props) {
  const me = useUser();
  // console.log(me);
  return (
    <ContainerStyles>
      <h2>Account Info For {me.name}</h2>
      <h3>
        <Link href="/sell">Add New Product</Link>
      </h3>
      <h3>
        <Link href="/orders">Previous Orders</Link>
      </h3>
      <RequestReset />
      <SignOut>Sign Out</SignOut>
    </ContainerStyles>
  );
}
