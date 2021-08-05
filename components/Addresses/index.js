import { useQuery } from '@apollo/client';
import Head from 'next/head';
import DisplayError from '../ErrorMessage';
import ContainerGrid from '../styles/ContainerGrid';
import Grid4Styles from '../styles/Grid4Styles';
import CreateAddress from './CreateAddress';
import Address from './Address';
import { MenuStateProvider } from '../../lib/menuState';
import { USER_ADDRESSES_QUERY } from '../../queries/getUserAddresses';
import { siteData } from '../../public/site-data';

export default function Addresses({
  showCreateNew,
  allowUpdate,
  allowDelete,
  selectAddress,
}) {
  const { data, loading, error } = useQuery(USER_ADDRESSES_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const addresses = data.allCustomerAddresses;

  return (
    <ContainerGrid>
      <Head>
        <title>Addresses | {siteData.businessName}</title>
      </Head>
      <h2>Your Addresses</h2>
      {/* <p>Click an address below to see details</p> */}
      <Grid4Styles>
        {addresses.map((address) => (
          <MenuStateProvider key={address.id}>
            <Address
              address={address}
              allowUpdate={allowUpdate}
              allowDelete={allowDelete}
              selectAddress={selectAddress}
            />
          </MenuStateProvider>
        ))}
        {/* <Button internalLink="/account/createaddress">Add A New Address</Button> */}
        {showCreateNew && <CreateAddress />}
      </Grid4Styles>
      <style jsx>{`
        .wrapper {
          width: 100%;
          height: auto;
        }
        .address {
          width: 100%;
          height: auto;
          text-align: left;
        }

        .buttonList {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          border: 0;
          box-shadow: none;
          padding: var(--spacing);
        }
      `}</style>
    </ContainerGrid>
  );
}
