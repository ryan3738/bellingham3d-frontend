import Link from 'next/link';
import DisplayAddress from './Addresses/DisplayAddress';
import Button from './Button';
import SignOut from './SignOut';
import ContainerGrid from './styles/ContainerGrid';
import { useUser } from './User';

export default function Account(props) {
  const user = useUser();
  if (!user) return null;
  // console.log(user);
  return (
    <ContainerGrid>
      <h1>Account Dashboard</h1>
      <h2>{user?.name}</h2>
      <h3>{user.email}</h3>

      <h4>Default Shipping Address</h4>
      {/* <DisplayAddress id={user?.defaultShipping.id} /> */}

      <Button internalLink="/account/addresses">Manage Addresses</Button>
      <Button internalLink="/account/orderhistory">Order History</Button>
      {user.role?.canManageProducts && (
        <>
          <Button internalLink="/sell">Add New Product</Button>
        </>
      )}
      <Button internalLink="/requestreset">Reset Your Password</Button>

      <SignOut>Sign Out</SignOut>
    </ContainerGrid>
  );
}
