import { render } from '@testing-library/react';
import Product from '../components/Products/Product';

describe('<Product/>', () => {
  it('Renders out the price tag and title', () => {
    const { container, debug } = render(<Product />);
    debug();
  });
});
