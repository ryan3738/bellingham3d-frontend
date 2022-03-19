import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { fakeProduct } from '../lib/testUtils';
import { SINGLE_PRODUCT_QUERY } from '../queries/getSingleProduct';
import ProductDetails from '../components/Products/ProductDetails';

const product = fakeProduct();

const mocks = [
  {
    // When somoen requests this query and variable combo
    request: {
      query: SINGLE_PRODUCT_QUERY,
      variables: {
        id: '123',
      },
    },
    // Return this data
    result: {
      data: {
        product,
      },
    },
  },
];

describe('<ProductDetails />', () => {
  it('renders with proper data', async () => {
    const { container, debug } = render(
      <MockedProvider mocks={mocks}>
        <ProductDetails id="123" />
      </MockedProvider>
    );
    // Wait for the test ID to show up
    await screen.findByTestId('productDetails');
    debug();
  });
});
