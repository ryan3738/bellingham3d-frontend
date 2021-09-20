import RequestReset from '../components/User/RequestReset';
import Reset from '../components/User/Reset';

export default function ResetPage({
  query,
}: {
  query: {
    token: string;
  };
}): JSX.Element {
  if (!query?.token) {
    console.log('query', query);
    return (
      <div>
        <p>Sorry you must supply a token</p>
        <RequestReset />
      </div>
    );
  }
  return (
    <div>
      <Reset token={query.token} />
    </div>
  );
}
