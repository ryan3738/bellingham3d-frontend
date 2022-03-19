import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { fakeProduct } from '../lib/testUtils';
import { SINGLE_PRODUCT_QUERY } from '../queries/getSingleProduct';
import ProductDetails from '../components/Products/ProductDetails';

const product = fakeProduct();

const mocks = [
  {
    // When someone requests this query and variable combo
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
const errorMock = [
  // When someone requests item that does not exist
  {
    request: {
      query: SINGLE_PRODUCT_QUERY,
      variables: {
        id: '123',
      },
    },
    result: {
      errors: [
        {
          message: 'Item not found',
        },
      ],
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
    expect(container).toMatchSnapshot();
  });

  it('Errors out when an item is not found', async () => {
    const { container, debug } = render(
      <MockedProvider mocks={errorMock}>
        <ProductDetails id="123" />
      </MockedProvider>
    );
    await screen.findByTestId('graphql-error');
    expect(container).toHaveTextContent('Item not found');
    debug();
  });
});
