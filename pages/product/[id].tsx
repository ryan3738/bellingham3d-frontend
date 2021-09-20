import ProductDetails from '../../components/Products/ProductDetails';

export default function SingleProductPage({
  query,
}: {
  query: {
    id: string;
  };
}): JSX.Element {
  return <ProductDetails id={query.id} />;
}
