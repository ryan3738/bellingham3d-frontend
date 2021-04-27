import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import formatMoney from '../lib/formatMoney';
import DisplayError from './ErrorMessage';
import OrderStyles from './styles/OrderStyles';
import { formatDate } from '../lib/formatDate';

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    order: Order(where: { id: $id }) {
      id
      charge
      total
      createdAt
      items {
        id
        name
        description
        price
        quantity
        variants
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

export default function SingleOrder({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ORDER_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const { order } = data;
  console.log('Order Date', order.createdAt);
  return (
    <OrderStyles>
      <Head>
        <title>Sicks Fits | {order.id} </title>
      </Head>
      <h2>Order Summary</h2>
      <div className="summary-item">
        <span>Order Id:</span>
        <span>{order.id}</span>
      </div>
      <div className="summary-item">
        <span>Charge:</span>
        <span>{order.charge}</span>
      </div>
      <div className="summary-item">
        <span>Order Date:</span>
        <span>{formatDate(order.createdAt)}</span>
      </div>
      <div className="summary-item">
        <span>Order Total:</span>
        <span>{formatMoney(order.total)}</span>
      </div>
      <div className="summary-item">
        <span>Order Items:</span>
        <span>{order.items.length}</span>
      </div>
      <div className="items">
        {order.items.map((item) => (
          <div className="order-item" key={item.id}>
            <img src={item.image.image.publicUrlTransformed} alt={item.title} />
            <div className="item-details">
              <strong>
                {item.name}
                {item.variants && ` | ${item.variants}`}
              </strong>

              <p>Qty: {item.quantity}</p>
              <p>Each: {formatMoney(item.price)}</p>
              <p>Sub Total: {formatMoney(item.price * item.quantity)} </p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p>Order Total: {formatMoney(order.total)}</p>
    </OrderStyles>
  );
}
