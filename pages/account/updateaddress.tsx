import UpdateAddress from '../../components/Addresses/UpdateAddress';

export default function UpdateAddressPage({ query }) {
  console.log(query);
  return (
    <div>
      <UpdateAddress id={query.id} />
    </div>
  );
}
