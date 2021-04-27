import UpdateProduct from '../components/Products/UpdateProduct';

export default function UpdatePage({ query }) {
  console.log(query);
  return (
    <div>
      <UpdateProduct id={query.id} />
    </div>
  );
}
