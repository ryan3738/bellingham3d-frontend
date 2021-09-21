import SingleOrder from '../../components/Orders/SingleOrder';

export default function SingleOrderPage({
  query,
}: {
  query: {
    id: string;
  };
}): JSX.Element {
  return <SingleOrder id={query.id} />;
}
