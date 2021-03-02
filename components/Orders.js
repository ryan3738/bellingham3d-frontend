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
        photo {
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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  /* align-content: stretch; */
  /* align-items: stretch; */
  /* align-content: stretch; */
  /* align-content: stretch; */
  grid-gap: var(--spacing);
  padding: 0rem;
  margin: 0;
`;

function countItemsInAnOrder(order) {
  return order.items.reduce((tally, item) => tally + item.quantity, 0);
}

export default function Orders() {
  const { data, loading, error } = useQuery(USER_ORDERS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const { allOrders } = data;
  return (
    <div>
      <Head>
        <title>Your Orders ({allOrders.length}) </title>
      </Head>
      <h2>You have {allOrders.length} orders! </h2>
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
                      src={item.photo?.image?.publicUrlTransformed}
                      alt={item.name}
                    />
                  ))}
                </div>
              </a>
            </Link>
          </OrderHistoryStyles>
        ))}
      </OrderUl>
    </div>
  );
}
