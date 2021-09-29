import { QueryDocumentKeys } from 'graphql/language/visitor';
import MagicAuth from '../components/User/MagicAuth';
import RequestMagicAuth from '../components/User/RequestMagicAuth';

export default function MagicAuthPage({
  query,
}: {
  query: {
    token: string;
    email: string;
  };
}): JSX.Element {
  if (!query?.token) {
    console.log('query', query);
    return (
      <div>
        <h1>Sorry you must supply a token</h1>
        <RequestMagicAuth />
      </div>
    );
  }
  return (
    <div>
      <MagicAuth token={query.token} email={query.email} />
    </div>
  );
}
