import SingleProduct from '../../components/Products/SingleProduct';

export default function SingleProductPage({
  query,
}: {
  query: {
    id: string;
  };
}): JSX.Element {
  return <SingleProduct id={query.id} />;
}
