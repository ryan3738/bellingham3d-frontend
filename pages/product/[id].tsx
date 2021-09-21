import ProductDetails from '../../components/Products/ProductDetails';

export default function ProductDetailsPage({
  query,
}: {
  query: {
    id: string;
  };
}): JSX.Element {
  return <ProductDetails id={query.id} />;
}
