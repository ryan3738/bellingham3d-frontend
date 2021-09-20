import { useCart } from '../../lib/cartState';
import Button from '../Button';

export default function SeeAllProducts(): JSX.Element {
  const { closeCart } = useCart();
  return (
    <Button onClick={closeCart} internalLink="/products">
      See All Products
    </Button>
  );
}
