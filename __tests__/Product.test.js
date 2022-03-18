import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import Product from '../components/Products/Product';
import { fakeProduct } from '../lib/testUtils';

const product = fakeProduct();

describe('<Product />', () => {
  it('renders out the price tag and title', () => {
    const { container, debug } = render(
      <MockedProvider>
        <Product product={product} />
      </MockedProvider>
    );
    const priceTage  = screen.getByText('$50');
    expect(priceTage).toBeInTheDocument();
    const link = container.querySelector('a');
    debug(link);
    expect(link).toHaveAttribute('href', '/product/abc123');
    expect(link).toHaveTextContent(product.name);
  });
});
