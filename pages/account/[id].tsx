import SingleOrder from '../../components/Orders/SingleOrder';

export default function SingleOrderPage({ query }) {
  return <SingleOrder id={query.id} />;
}
