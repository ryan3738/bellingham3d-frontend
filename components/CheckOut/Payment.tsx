import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import nProgress from 'nprogress';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import LargeButton from '../styles/LargeButton';
import { useCart } from '../../lib/cartState';
import { CURRENT_USER_QUERY } from '../../queries/getUser';
import { Address } from '../../types/types';

const CheckoutFormStyles = styled.form`
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
`;

const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION($token: String!, $shippingId: ID) {
    checkout(token: $token, shippingId: $shippingId) {
      id
      charge
      total
      items {
        id
        name
      }
    }
  }
`;

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

function CheckoutForm({
  shippingId,
}: {
  shippingId: Address['id'];
}): JSX.Element {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const { closeCart } = useCart();
  const [checkout, { error: graphQlError }] = useMutation(
    CREATE_ORDER_MUTATION,
    {
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );
  // console.log('this is the shippingId', shippingId);
  async function handleSubmit(e): Promise<void> {
    // 1. Stop the form from submitting and turn the loader on
    e.preventDefault();
    setError(null);
    setLoading(true);

    console.log('Checking Out');
    // 2. Start the page transition

    // 3. Create the payment method via stripe (Token comes back here if successful)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    // console.log(paymentMethod);
    // 4. Handle any errors from stripe
    if (error) {
      setError(error);
      setLoading(false);
      return; // stops the checkout from happening if there is an error
    }
    // 5. Send the token from step 3 to our keystone server, via a custom mutation!
    const order = await checkout({
      variables: {
        token: paymentMethod.id,
        shippingId,
      },
    });
    console.log('finished with the order');
    // console.log(order);
    // 6. Change the page to view the order
    // query params
    router.push({
      pathname: '/order/[id]',
      query: { id: order.data.checkout.id },
    });
    // 7. Close the cart
    closeCart();
    // 8. Turn the loader off
    setLoading(false);
  }

  if (loading) {
    nProgress.start();
  }
  if (!loading) {
    nProgress.done();
  }

  return (
    <CheckoutFormStyles onSubmit={handleSubmit}>
      {error && <p style={{ fontSize: 12 }}>{error?.message}</p>}
      {graphQlError && <p style={{ fontSize: 12 }}>{error?.message}</p>}
      <CardElement />
      <LargeButton>
        Confirm Order
        <div style={{ fontSize: '0.78405rem' }}>Your card will be charged</div>
      </LargeButton>
    </CheckoutFormStyles>
  );
}

function Payment({ shippingId }: { shippingId?: Address['id'] }): JSX.Element {
  return (
    <Elements stripe={stripeLib}>
      <CheckoutForm shippingId={shippingId} />
    </Elements>
  );
}

export { Payment };
