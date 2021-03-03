import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';
import DisplayError from './ErrorMessage';
import OrderHistoryStyles from './styles/OrderHistoryStyles';

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    allOrders {
      id
      charge
      total
      items {
        id
        name
        description
        price
        quantity
        image {
          id
          image {
            id
            publicUrlTransformed
          }
          altText
        }
      }
    }
  }
`;

const OrderUl = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-gap: var(--spacing);
  justify-items: center;
  padding: 0;
  margin: 0;
  min-width: 100%;
`;

function countItemsInAnOrder(order) {
  return order.items.reduce((tally, item) => tally + item.quantity, 0);
}

export default function OrderHistory() {
  const { data, loading, error } = useQuery(USER_ORDERS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const { allOrders } = data;
  return (
    <div className="wrapper">
      <Head>
        <title>Your Orders ({allOrders.length}) </title>
      </Head>
      <h2>You have {allOrders.length} orders! </h2>
      <p>Click an order below to see details</p>
      <OrderUl>
        {allOrders.map((order) => (
          <OrderHistoryStyles>
            <Link href={`/order/${order.id}`}>
              <a>
                <div className="order-meta">
                  <p>
                    {countItemsInAnOrder(order)} Item
                    {countItemsInAnOrder(order) === 1 ? '' : 's'}
                  </p>
                  <p>
                    {order.items.length} Product
                    {order.items.length === 1 ? '' : 's'}
                  </p>
                  <p>{formatMoney(order.total)}</p>
                </div>
                <div className="images">
                  {order.items.map((item) => (
                    <img
                      key={`image-${item.id}`}
                      src={item.image?.image?.publicUrlTransformed}
                      alt={item.name}
                    />
                  ))}
                </div>
              </a>
            </Link>
          </OrderHistoryStyles>
        ))}
      </OrderUl>
      <style jsx>{`
        .wrapper {
        }
      `}</style>
    </div>
  );
}
