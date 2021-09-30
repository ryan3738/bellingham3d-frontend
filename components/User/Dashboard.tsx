import Head from 'next/head';
import { siteData } from '../../public/site-data';
import Button from '../Button';
import SignOut from './SignOut';
import ContainerGrid from '../styles/ContainerGrid';
import { useUser } from './User';
import AuthTabs from './AuthTabs';

export default function Account(): JSX.Element {
  const user = useUser();
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
          {/* <Button internalLink="/requestreset">Reset Your Password</Button> */}
          <SignOut>Sign Out</SignOut>
        </ContainerGrid>
      ) : (
        <>
          <Head>
            <title>Account Dashboard | {siteData.businessName}</title>
          </Head>
          <h1>Account Dashboard</h1>
          <p>Please sign in or sign up to see your dashboard</p>
          <AuthTabs />
        </>
      )}
    </>
  );
}
