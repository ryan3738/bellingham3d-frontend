import { render } from '@testing-library/react';
import wait from 'waait';
import CartCount from '../components/Cart/CartCount';

describe('<CartCount />', () => {
  it('Renders', () => {
    render(<CartCount count={10} />);
  });
  it('Matches snapshop', () => {
    const { container } = render(<CartCount count={11} />);
    expect(container).toMatchSnapshot();
  });
  it('Updates via props', async () => {
    const { container, rerender, debug } = render(<CartCount count={11} />);
    expect(container.textContent).toEqual('11');
    // expect(container).toHaveTextContent('11');
    // Update the props
    rerender(<CartCount count={12} />);
    // Wait for __ ms
    expect(container.textContent).toEqual('1211');
    await wait(400);
    expect(container.textContent).toEqual('12');
    expect(container).toMatchSnapshot();
    debug();
  });
});
