import Link from 'next/link';
import Button from './Button';
import SignOut from './SignOut';
import ContainerGrid from './styles/ContainerGrid';
import { useUser } from './User';

export default function Account(props) {
  const user = useUser();
  if (!user) return null;
  // console.log(me);
  return (
    <ContainerGrid>
      <h1>Dashboard</h1>
      <h2>{user?.name}</h2>
      <h3>{user.email}</h3>

      {user.defaultAddress && (
        <div>
          <h4>Default Address</h4>
          <p>
            {`${user.defaultAddress.firstName} ${user.defaultAddress.lastName}`}
          </p>
          <p>{user.defaultAddress.company}</p>
          <p>{user.defaultAddress.address1}</p>
          <p>{user.defaultAddress.address2}</p>
          <p>
            {user.defaultAddress.city}, {user.defaultAddress.country}
          </p>
          <p>{user.defaultAddress.zip}</p>
          <p>{user.defaultAddress.phone}</p>
        </div>
      )}

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
