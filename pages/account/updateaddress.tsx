import UpdateAddress from '../../components/Addresses/UpdateAddress';

export default function UpdateAddressPage({
  query,
}: {
  query: {
    id: string;
  };
}): JSX.Element {
  console.log(query);
  return (
    <div>
      <UpdateAddress id={query.id} />
    </div>
  );
}
