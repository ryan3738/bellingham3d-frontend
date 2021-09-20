import Addresses from '../../components/Addresses';

export default function AddressesPage(): JSX.Element {
  return (
    <div>
      <Addresses allowUpdate allowDelete showCreateNew />
    </div>
  );
}
