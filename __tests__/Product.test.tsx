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
    const priceTag = screen.getByText('$50');
    expect(priceTag).toBeInTheDocument();

    const productDetailLink = container.querySelector('a');
    expect(productDetailLink).toHaveAttribute('href', '/product/abc123');
    expect(productDetailLink).toHaveTextContent(product.name);
  });

  it('Renders and matches the snapshot', () => {
    const { container, debug } = render(
      <MockedProvider>
        <Product product={product} />
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('Renders the image properly', () => {
    const { container, debug } = render(
      <MockedProvider>
        <Product product={product} />
      </MockedProvider>
    );
    // grab the image
    const img = screen.getByAltText(product.name);
    expect(img).toBeInTheDocument();
  });
});
