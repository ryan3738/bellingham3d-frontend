import UpdateProduct from '../components/Products/UpdateProduct';

export default function UpdatePage({
  query,
}: {
  query: {
    id: string;
  };
}): JSX.Element {
  console.log(query);
  return (
    <div>
      <UpdateProduct id={query.id} />
    </div>
  );
}
