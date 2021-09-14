import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Image from 'next/image';
import formatMoney from '../../lib/formatMoney';
import DisplayError from '../ErrorMessage';
import OrderStyles from '../styles/OrderStyles';
import { formatDate } from '../../lib/formatDate';
import DisplayAddress from '../Addresses/DisplayAddress';
import { siteData } from '../../public/site-data';

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    order(where: { id: $id }) {
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
            publicUrlTransformed(transformation: { width: "600" })
          }
          altText
        }
      }
      shippingAddress {
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
      <div className="summary-item">
        <span>Shipping Address:</span>
        <span style={{ textAlign: 'left' }}>
          <DisplayAddress address={order.shippingAddress} />
        </span>
      </div>
      <div className="items">
        {order.items.map((item) => (
          <div className="order-item" key={item.id}>
            <Image
              src={
                item.image
                  ? item.image.image.publicUrlTransformed
                  : siteData.placeholderImage.medium.src
              }
              alt={item.title}
              loading="lazy"
              layout="intrinsic"
              height="240"
              width="360"
              objectFit="cover"
            />
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
      <style jsx>
        {`
          .pass-wrapper {
            position: relative;
            width: 100%;
            margin-bottom: 14px;
          }
        `}
      </style>
    </OrderStyles>
  );
}
