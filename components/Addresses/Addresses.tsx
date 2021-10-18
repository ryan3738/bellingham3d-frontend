import { useQuery } from '@apollo/client';
import Head from 'next/head';
import DisplayApolloError from '../DisplayApolloError';
import ContainerGrid from '../styles/ContainerGrid';
import Grid4Styles, { GridBox } from '../styles/Grid4Styles';
import CreateAddress from './CreateAddress';
import Address from './Address';
import { MenuStateProvider } from '../../lib/menuState';
import { USER_ADDRESSES_QUERY } from '../../queries/getUserAddresses';
import { siteData } from '../../public/site-data';
import { AddressType } from '../../types/types';

type AppProps = {
  showCreateNew?: boolean;
  allowUpdate?: boolean;
  allowDelete?: boolean;
  selectAddress?: (address: AddressType) => void;
};

export default function Addresses({
  showCreateNew,
  allowUpdate,
  allowDelete,
  selectAddress,
}: AppProps): JSX.Element {
  const { data, loading, error } = useQuery(USER_ADDRESSES_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayApolloError error={error} />;
  const addresses = data.customerAddresses;

  return (
    <ContainerGrid>
      <Head>
        <title>Addresses | {siteData.businessName}</title>
      </Head>
      <h2>Your Addresses</h2>
      {/* <p>Click an address below to see details</p> */}
      <Grid4Styles>
        {addresses.map((address: AddressType) => (
          <MenuStateProvider key={address.id}>
            <GridBox>
              <Address
                address={address}
                allowUpdate={allowUpdate}
                allowDelete={allowDelete}
                selectAddress={selectAddress}
              />
            </GridBox>
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
