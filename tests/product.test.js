import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import Product from '../components/Products/Product';
import { fakeItem } from '../lib/testUtils';

const product = fakeItem();

describe('<Product/>', () => {
  it('renders out the price tag and title', () => {
    const { container, debug } = render(
      <MockedProvider>
        <Product product={product} />
      </MockedProvider>
    );
    debug();
  });
});
