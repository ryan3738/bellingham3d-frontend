import Head from 'next/head';
import { siteData } from '../../public/site-data';
import Button from '../Button';
import SignOut from './SignOut';
import ContainerGrid from '../styles/ContainerGrid';
import { useUser } from './User';
import SignUp from './SignUp';
import SignIn from './SignIn';

export default function Account(): JSX.Element {
  const user = useUser();
  // if (!user) return null;
  return (
    <>
      {user ? (
        <ContainerGrid>
          <Head>
            <title>
              {user.name || user.email} Dashboard | {siteData.businessName}
            </title>
          </Head>
          <h1>Account Dashboard</h1>
          <h2>{user?.name}</h2>
          <h3>{user.email}</h3>
          <Button internalLink="/account/addresses">Manage Addresses</Button>
          <Button internalLink="/account/orderhistory">Order History</Button>
          <Button internalLink="/requestreset">Reset Your Password</Button>
          <SignOut>Sign Out</SignOut>
        </ContainerGrid>
      ) : (
        <>
          <Head>
            <title>Account Dashboard | {siteData.businessName}</title>
          </Head>
          <h1>Account Dashboard</h1>
          <SignUp />
          <SignIn />
        </>
      )}
    </>
  );
}
