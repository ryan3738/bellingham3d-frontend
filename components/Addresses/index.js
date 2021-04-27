import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Button from '../Button';
import DisplayError from '../ErrorMessage';
import ContainerGrid from '../styles/ContainerGrid';
import Grid4Styles from '../styles/Grid4Styles';
import OrderHistoryStyles from '../styles/OrderHistoryStyles';
import DeleteAddress from './DeleteAddress';
import EditButton from '../EditButton';

export const USER_ADDRESSES_QUERY = gql`
  query USER_ADDRESSES_QUERY {
    allCustomerAddresses {
      id
      firstName
      lastName
      company
      address1
      address2
      city
      region
      country
      zip
      phone
    }
  }
`;

export default function Addresses() {
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
          <div className="address" key={address.id}>
            <p>
              {address.firstName} {address.lastName}
            </p>
            <p>{address.address1}</p>
            <p>{address.address2}</p>
            <p>
              {address.city}, {address.region} {address.country}
            </p>
            <p>{address.zip}</p>
            <p>{address.phone}</p>
            <div className="buttonList">
              <DeleteAddress id={address.id}>
                <FaTrash />
              </DeleteAddress>
              <EditButton id={address.id} pathname="/account/updateaddress">
                <FaEdit />
              </EditButton>
            </div>
          </div>
        ))}
        <Button internalLink="/account/createaddress">Add A New Address</Button>
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
