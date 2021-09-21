import SingleOrder from '../../components/Orders/Order';

export default function SingleOrderPage({
  query,
}: {
  query: {
    id: string;
  };
}): JSX.Element {
  return <SingleOrder id={query.id} />;
}
