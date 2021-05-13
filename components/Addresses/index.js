import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import { useState } from 'react';
import DisplayError from '../ErrorMessage';
import ContainerGrid from '../styles/ContainerGrid';
import Grid4Styles from '../styles/Grid4Styles';
import CreateAddress from './CreateAddress';
import Address from './Address';
import { MenuStateProvider } from '../../lib/menuState';
import { USER_ADDRESSES_QUERY } from '../../queries/getUserAddresses';

export default function Addresses({
  showCreateNew,
  updateAddress,
  selectAddress,
}) {
  const { data, loading, error } = useQuery(USER_ADDRESSES_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const addresses = data.allCustomerAddresses;

  return (
    <ContainerGrid>
      <Head>
        <title>Your Addresses </title>
      </Head>
      <h2>Your Addresses</h2>
      {/* <p>Click an address below to see details</p> */}
      <Grid4Styles>
        {addresses.map((address) => (
          <MenuStateProvider key={address.id}>
            <Address
              address={address}
              updateAddress={updateAddress}
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
